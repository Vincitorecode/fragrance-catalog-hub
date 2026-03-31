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
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Verde overlay (hover effect) */}
      <div className="absolute inset-0 bg-[#013220] opacity-0 transition-opacity duration-700 group-hover:opacity-70 mix-blend-color" />

      {/* Bottom Gradient (mantiene legibilidad del texto) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Title */}
      <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-10 md:pb-12">
        <h2
          className="font-brandon font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-[1] tracking-[0] text-center drop-shadow-lg transition-all duration-500 group-hover:tracking-[0.18em]"
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default GenderCard;
