import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  institute: string;
};

const ResumeCard = ({ role, Icon, date, institute }: Props) => {
  return (
    <div className="mb-6">
      <div
        className="
        flex flex-col sm:flex-row
        items-start
        gap-4 sm:gap-6
        bg-[#14142b]
        border border-cyan-500/10
        hover:border-cyan-400/30
        transition-all duration-300
        p-4 sm:p-6 lg:p-8
        rounded-xl
        "
      >
        {/* Icon */}
        <div
          className="
          w-12 h-12
          sm:w-14 sm:h-14
          bg-cyan-500/20
          rounded-full
          flex items-center justify-center
          flex-shrink-0
          "
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-300" />
        </div>

        {/* Content */}
        <div className="flex-1">
          {date && (
            <span
              className="
              inline-block
              px-3 py-1
              sm:px-5 sm:py-1.5
              rounded-full
              bg-cyan-500/15
              text-cyan-300
              text-xs sm:text-sm
              font-semibold
              mb-3
              "
            >
              {date}
            </span>
          )}

          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            {role}
          </h3>

          <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            {institute}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
