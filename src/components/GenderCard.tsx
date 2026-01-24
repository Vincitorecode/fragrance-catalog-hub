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
        group relative flex flex-col items-center justify-start
        rounded-2xl bg-card border border-border overflow-hidden card-hover
        px-4 py-3 sm:px-6 sm:py-5 md:px-8 md:py-8
      "
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image container (más baja en mobile) */}
      <div className="relative z-10 w-full max-w-[360px]">
        <div className="w-full overflow-hidden rounded-2xl bg-cream aspect-[4/3] md:aspect-square">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover sm:group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text content */}
      <h2 className="relative z-10 mt-2 sm:mt-3 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground sm:group-hover:text-primary transition-colors duration-300 text-center">
        {title}
      </h2>

      <p className="relative z-10 mt-1.5 text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-sm line-clamp-2">
        {description}
      </p>

      {/* Arrow indicator */}
      <div
        className="
          relative z-10 mt-2 sm:mt-3 flex items-center gap-2 text-primary
          opacity-100
          sm:opacity-0 sm:translate-x-[-8px] sm:group-hover:opacity-100 sm:group-hover:translate-x-0
          transition-all duration-300
        "
      >
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
    </Link>
  );
};

export default GenderCard;
