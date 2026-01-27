import { Link } from "react-router-dom";

interface GenderCardProps {
  gender: "hombre" | "mujer";
  title: string;
  description: string;
  imageSrc: string;
}

const GenderCard = ({ gender, title, description, imageSrc }: GenderCardProps) => {
  return (
    <Link
      to={`/${gender}`}
      className="
        group relative flex flex-col overflow-hidden rounded-2xl
        bg-card border border-border card-hover
        h-[200px] sm:h-[220px] md:h-[260px] lg:h-[280px]
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mt-auto p-4 sm:p-5 md:p-6 text-white">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
          {title}
        </h2>

        <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-[280px] drop-shadow">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="flex items-center gap-2 mt-2 sm:mt-3 text-white/90 opacity-100 sm:opacity-0 sm:translate-x-[-8px] sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300">
          <span className="text-xs sm:text-sm font-medium">Ver perfumes</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default GenderCard;
