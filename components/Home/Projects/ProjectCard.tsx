import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  src: string;
  heading: string;
  description: string;
  liveLink?: string;
};

const ProjectCard = ({
  src,
  heading,
  description,
  liveLink,
}: Props) => {
  return (
    <div
      className="
        bg-[#14142b]
        rounded-2xl
        overflow-hidden
        border border-cyan-500/10
        hover:border-cyan-400/30
        hover:-translate-y-2
        transition-all duration-300
        shadow-lg
        flex flex-col
        h-full
      "
    >
      <Image
        src={src}
        alt={heading}
        width={800}
        height={650}
        className="
          w-full
          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          object-cover
        "
      />

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          {heading}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-gray-300 flex-1">
          {description}
        </p>

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              w-fit
              px-5 py-2.5
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              rounded-full
              font-medium
              flex items-center
              transition-all duration-300
            "
          >
            View Project
            <BsArrowRight className="ml-2 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;