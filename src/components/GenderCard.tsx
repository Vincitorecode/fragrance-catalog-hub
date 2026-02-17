import { Link } from "react-router-dom";

interface GenderCardProps {
  gender: "hombre" | "mujer";
  title: string;
  description: string;
  imageSrc: string;
}

const GenderCard = ({ gender, title, imageSrc }: GenderCardProps) => {
  return (
    <Link
      to={`/${gender}`}
      className="group relative block overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px]"
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#013220]/70 via-transparent to-transparent" />

      {/* Title */}
      <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-10 md:pb-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.1em] uppercase drop-shadow-lg">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default GenderCard;
