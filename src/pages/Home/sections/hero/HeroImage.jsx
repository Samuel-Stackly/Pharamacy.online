import { heroBanner } from "./heroData";

function HeroImage() {
  return (
    <div className="flex h-[420px] w-[350px] h-full items-center justify-center">
      <img
        src={heroBanner.image}
        alt={heroBanner.title}
        className="h-[420px] w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}

export default HeroImage;