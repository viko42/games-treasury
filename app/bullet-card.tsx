import React from "react";
import { IconType } from "react-icons";
import { IoTrendingUpSharp, IoTrendingDownSharp } from "react-icons/io5";

interface BulletCardProps {
  title: string;
  amount?: number;
  icon: IconType;
  iconColor?: string;
  percentageChange?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
}

const BulletCard: React.FC<BulletCardProps> = ({
  title,
  amount,
  icon: Icon,
  iconColor = "text-green-400",
  percentageChange,
  prefix = "",
  suffix = "",
  text = "",
}) => {
  return (
    <div 
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 text-white h-full flex flex-col justify-between"
      style={{
        border: '1px solid #1E2027', // Dark gray border
        borderRadius: '.625rem',
        boxShadow: 'none',
      }}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Icon className={`${iconColor} mr-2`} size={28} />
              <span className="text-xl font-semibold">{title}</span>
            </div>
            {percentageChange !== undefined && (
              <div className="flex items-center">
                {percentageChange >= 0 ? (
                  <IoTrendingUpSharp
                    className="text-green-400 mr-2"
                    size={24}
                  />
                ) : (
                  <IoTrendingDownSharp
                    className="text-red-400 mr-2"
                    size={24}
                  />
                )}
                <span
                  className={`text-${
                    percentageChange < 0 ? "red" : "green"
                  }-400 font-semibold`}
                >
                  {Math.abs(percentageChange)}%
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="text-5xl font-bold text-white">
          {prefix}
          {amount ? amount.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }) : ''}
          {text ? text : ''}
          {suffix}
        </div>
      </div>
    </div>
  );
};

export default BulletCard;
