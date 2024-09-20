"use client"
import Image from "next/image";
import CommissionChart from "./charts/commission-chart";
import CollectionsPieChart from "./charts/collections-pie-chart";
import BulletCard from "../bullet-card";
import {
  FaCalendar,
  FaDollarSign,
  FaPercentage,
  FaShoppingCart,
} from "react-icons/fa";
import { defaultStats, mockResponseApi } from "./apis";
import { useEffect, useState } from "react";
// import axios from "axios";

export default function WildForest() {
  const [stats, setStats] = useState(defaultStats);
  useEffect(() => {
    setStats(mockResponseApi);
    // axios.get("http://localhost:3000/api/runiverse")
    //   .then((response) => {
    //     setStats(response.data);
    //   })
    //   .catch(err => {
    //     setStats(mockResponseApi);
    //   });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Banner Image */}
      <div className="relative h-48 md:h-60 lg:h-72">
        <video
          src="/videos/bg-homepage.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <Image
          src="/images/runiverse-logo.png"
          alt="Middle Image"
          width={300}
          height={300}
          className="absolute top-[10px] sm:top-[45px] md:top-[30px] lg:top-[100px] left-1/2 transform -translate-x-1/2 z-[1000]"
        />
      </div>      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 mb-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Treasury"
                amount={stats.treasury}
                icon={FaDollarSign}
                iconColor="text-yellow-400"
                percentageChange={5.2}
                prefix="$"
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

          <div className="w-full px-2 mb-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Total sales"
                amount={stats.totalSales}
                icon={FaShoppingCart}
                iconColor="text-yellow-400"
              />
            </div>
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Yesterday Commission"
                amount={stats.yesterdaysCommission}
                icon={FaDollarSign}
                iconColor="text-yellow-400"
                prefix="$"
              />
            </div>

            <div className="w-full sm:flex-1">
              <BulletCard
                title="Yesterday Sales"
                amount={stats.yesterdaysSales}
                icon={FaShoppingCart}
                iconColor="text-yellow-400"
              />
            </div>
          </div>
        </div>
        <CommissionChart stats={stats} />
        <div className="flex flex-col space-y-8 my-10">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 flex items-center">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-4">
                Commission Distribution
                </h3>
                <p className="text-gray-300">
                  This pie chart illustrates the distribution of commissions across different collection types in The Forgotten Runiverse:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Items: Game materials, equipment, and consumables.</li>
                  <li>Watcher&apos;s rings: Limited NFTs granting benefits to early supporters.</li>
                  <li>Real Estate: Unique land plots with resources, used for various in-game activities.</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="h-[450px]">
                <CollectionsPieChart stats={stats}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
