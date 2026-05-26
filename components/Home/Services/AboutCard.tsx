import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const AboutCard = ({ icon, title, description }: Props) => {
  return (
    <div
      className="
      bg-[#14142b]
      border border-cyan-500/10
      rounded-2xl
      p-6
      hover:border-cyan-400/40
      hover:-translate-y-2
      transition-all
      duration-300
      shadow-lg
      h-full
      "
    >
      <Image
        src={icon}
        alt={title}
        width={60}
        height={60}
        className="w-14 h-14"
      />

      <h3 className="mt-5 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default AboutCard;