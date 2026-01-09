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
      className="group relative flex flex-col items-center justify-center p-8 md:p-12 rounded-2xl bg-card border border-border overflow-hidden card-hover"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className="relative z-10 w-full max-w-[380px]">
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-cream">
            <img
              src={imageSrc}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          
        </div>



      {/* Text content */}
      <h2 className="relative z-10 mt-6 font-display text-3xl md:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
  {title}
</h2>
<p className="relative z-10 mt-3 text-muted-foreground text-center max-w-md">
  {description}
</p>


      {/* Arrow indicator */}
      <div className="relative z-10 mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
        <span className="text-sm font-medium">Ver perfumes</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
