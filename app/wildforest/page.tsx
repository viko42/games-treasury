"use client"
import Image from "next/image";
import CommissionChart from "./charts/commission-chart";
// import CollectionsPieChart from "./charts/collections-pie-chart";
import BulletCard from "../bullet-card";
import {
  FaCalendar,
  FaDollarSign,
  FaPercentage,
  FaShoppingCart,
} from "react-icons/fa";
import { defaultStats } from "./apis";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GamesListSliders from "../games-list-sliders";

export default function WildForest() {
  const [stats, setStats] = useState(defaultStats);
  const [syncStatus] = useState<string | null>(null);
  const [toastId, setToastId] = useState<string | number | null>(null);
  const [chartData, setChartData] = useState([]);

  const fetchSyncStatus = useCallback(() => {
    axios.get("https://api.lord-holders.xyz/public/ronin-games-block-sync")
      .then((response) => {
        const { currentBlock, latestBlock } = response.data;

        if (latestBlock && latestBlock - currentBlock > 100) {
          toast.update(toastId!, {
            render: `${latestBlock - currentBlock} blocks remaining`,
            type: "info",
            isLoading: true,
            autoClose: 5000,
            updateId: toastId,
          });
        }
        
      })
      .catch(err => {
        console.error("Error fetching sync status:", err);
        toast.update(toastId!, {
          render: "Error fetching sync status",
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          updateId: toastId,
        });
      });
  }, [toastId]);

  useEffect(() => {
    const id = toast.info('Initializing sync', {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setToastId(id);

    return () => {
      if (id) {
        toast.dismiss(id);
      }
    };
  }, []);

  useEffect(() => {
    if (toastId !== null) {
      const syncIntervalId = setInterval(fetchSyncStatus, 5000);
      return () => clearInterval(syncIntervalId);
    }
  }, [toastId, fetchSyncStatus]);

  // Ajoutez un nouvel useEffect pour appeler fetchSyncStatus une fois que toastId est défini
  useEffect(() => {
    if (toastId !== null) {
      fetchSyncStatus();
    }
  }, [toastId, fetchSyncStatus]);

  useEffect(() => {
    if (syncStatus) {
      toast.info(syncStatus, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'sync-status', // ID unique pour la notification
      });
    } else {
      toast.dismiss('sync-status');
    }
  }, [syncStatus]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://api.lord-holders.xyz/public/ronin-games-commissions")
        .then((response) => {
          setStats(prevStats => ({
            ...prevStats,
            commissionPercentage: 5,
            createdSince: new Date("08/25/2023").toISOString(),
            todaysCommission: Number(Number(response.data.WildForest?.totalCommission * response.data.ronPrice || 0).toFixed(2)),
            todaysSales: Number(Number(response.data.WildForest?.totalTxs || 0).toFixed(2)),
            totalSales: Number(Number(response.data.globalCommission?.totalTxs || 0).toFixed(2)),
            treasury: Number(Number(response.data.globalCommission?.totalCommission * response.data.ronPrice || 0).toFixed(2))
          }));
        })
        .catch(err => {
          console.error("Error fetching data:", err);
        });
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get("https://api.lord-holders.xyz/public/ronin-games-commissions-chart");
        setChartData(response.data);
      } catch (err) {
        console.error("Error fetching chart data:", err);
      }
    };

    fetchChartData();
    const intervalId = setInterval(fetchChartData, 60000); // Fetch every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ToastContainer position="bottom-right" theme="dark" limit={1} />
      {/* Banner Image */}
      <div className="relative h-48 md:h-60 lg:h-72">
        <Image
          src="https://cdn.skymavis.com/ronin/2020/erc721/0xa038c593115f6fcd673f6833e15462b475994879/banner.png" // Replace with your actual banner image path
          alt="Wild Forest Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <Image
          src="/images/logo.png"
          alt="Middle Image"
          width={300}
          height={300}
          className="absolute top-[-15px] sm:top-[45px] md:top-[30px] lg:top-[45px] left-1/2 transform -translate-x-1/2 z-[1000]"
        />
      </div>      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 mb-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Monthly Commission"
                amount={stats.treasury}
                icon={FaDollarSign}
                iconColor="text-yellow-400"
                percentageChange={5.2}
                prefix="$"
              />
            </div>
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Today&apos;s Commission"
                amount={stats.todaysCommission}
                icon={FaDollarSign}
                iconColor="text-yellow-400"
                prefix="$"
                auraEffect={true}
              />
            </div>
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Today&apos;s Sales"
                amount={stats.todaysSales}
                icon={FaShoppingCart}
                iconColor="text-yellow-400"
              />
            </div>
            
          </div>

          <div className="w-full px-2 mb-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Monthly sales"
                tooltip="Recording started on September 1st"
                amount={stats.totalSales}
                icon={FaShoppingCart}
                iconColor="text-yellow-400"
              />
            </div>
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Market commission"
                amount={stats.commissionPercentage}
                icon={FaPercentage}
                iconColor="text-yellow-400"
                suffix="%"
              />
            </div>

            <div className="w-full sm:flex-1">
              <BulletCard
                title="Created since"
                text={(() => {
                  const createdDate = new Date(stats.createdSince);
                  const now = new Date();
                  const diffTime = Math.abs(new Date(now).getTime() - createdDate.getTime());
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  
                  if (diffDays < 30) {
                    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
                  } else if (diffDays < 365) {
                    const months = Math.floor(diffDays / 30);
                    return `${months} month${months > 1 ? 's' : ''} ago`;
                  } else {
                    const years = Math.floor(diffDays / 365);
                    return `${years} year${years > 1 ? 's' : ''} ago`;
                  }
                })()}
                icon={FaCalendar}
                iconColor="text-yellow-400"
              />
            </div>
          </div>
        </div>
        <CommissionChart chartData={chartData} />
        <GamesListSliders game="wildforest" />
      </main>
    </div>
  );
}
