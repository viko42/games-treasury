import React, { useEffect, useState, useRef } from "react";
import { IconType } from "react-icons";
import { IoTrendingUpSharp, IoTrendingDownSharp } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";

interface BulletCardProps {
  title: string;
  amount?: number;
  icon: IconType;
  iconColor?: string;
  percentageChange?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  tooltip?: string;
  auraEffect?: boolean;
  counterEffect?: boolean;
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
  tooltip,
  auraEffect = false,
  counterEffect = false,
}) => {
  const [displayedAmount, setDisplayedAmount] = useState(amount);
  const [isAuraActive, setIsAuraActive] = useState(false);
  const previousAmountRef = useRef(amount);

  useEffect(() => {
    if (amount !== undefined && amount !== previousAmountRef.current) {
      setIsAuraActive(true);
      setDisplayedAmount(amount);
      const auraTimeout = setTimeout(() => {
        setIsAuraActive(false);
      }, 4000);

      previousAmountRef.current = amount;

      return () => {
        clearTimeout(auraTimeout);
      };
    }
  }, [amount]);

  return (
    <div className="relative">
      {auraEffect && isAuraActive && (
        <div className="absolute inset-0 aura-effect" />
      )}
      <div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 text-white h-full flex flex-col justify-between"
        style={{
          borderRadius: '.625rem',
        }}
      >
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Icon className={`${iconColor} mr-2`} size={28} />
                <span className="text-xl font-semibold">{title}</span>
                {tooltip && (
                  <div className="relative group ml-2">
                    <FiInfo className="text-gray-400 cursor-pointer" size={16} />
                    <div className="absolute z-10 invisible group-hover:visible bg-gray-700 text-white text-sm rounded p-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-48">
                      {tooltip}
                    </div>
                  </div>
                )}
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
            {displayedAmount !== undefined ? displayedAmount.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            }) : ''}
            {text ? text : ''}
            {suffix}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletCard;