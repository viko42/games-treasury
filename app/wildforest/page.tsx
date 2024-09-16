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

export default function WildForest() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
          width={300} // Adjust size as needed
          height={300} // Adjust size as needed
          className="absolute top-[-15px] sm:top-[45px] md:top-[30px] lg:top-[45px] left-1/2 transform -translate-x-1/2"
        />
      </div>      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 mb-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Treasury"
                amount={1000000}
                icon={FaDollarSign}
                iconColor="text-yellow-400"
                percentageChange={5.2}
                prefix="$"
              />
            </div>
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Mavis fee"
                amount={5}
                icon={FaPercentage}
                iconColor="text-yellow-400"
                suffix="%"
              />
            </div>
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Created since"
                amount={5}
                icon={FaCalendar}
                iconColor="text-yellow-400"
                suffix=" months"
              />
            </div>
          </div>

          <div className="w-full px-2 mb-4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Total sales"
                amount={500000}
                icon={FaShoppingCart}
                iconColor="text-yellow-400"
              />
            </div>
            <div className="w-full sm:flex-1">
              <BulletCard
                title="Yesterday Commission"
                amount={34000}
                icon={FaDollarSign}
                iconColor="text-yellow-400"
                prefix="$"
              />
            </div>

            <div className="w-full sm:flex-1">
              <BulletCard
                title="Yesterday Sales"
                amount={500000}
                icon={FaShoppingCart}
                iconColor="text-yellow-400"
              />
            </div>
          </div>
        </div>
        <CommissionChart />
        <div className="flex flex-col space-y-8 my-10">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 flex items-center">
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-4">
                  Collections Pie Chart
                </h3>
                <p className="text-gray-300">
                  This pie chart illustrates the distribution of collections in
                  Wild Forest. Each slice represents a different collection,
                  allowing for easy comparison of their relative sizes and
                  market shares.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="h-[450px]">
                <CollectionsPieChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
