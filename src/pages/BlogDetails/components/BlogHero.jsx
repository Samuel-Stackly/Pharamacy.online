import { ArrowDown } from "lucide-react";

import hero from "../../../assets/images/blog/blog-hero.svg";

function BlogHero() {
  return (
    <section className="mt-8">
      <div className="relative overflow-hidden rounded-[28px]">
        <img
          src={hero}
          alt="Blog Hero"
          className="h-[650px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-14 left-14 right-14 flex items-end gap-8">
          <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#31D4B5] text-white transition hover:bg-[#28BEA4]">
            <ArrowDown size={22} />
          </button>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight text-white lg:text-6xl">
            Remain a woman. How does hormonal balance allow you to stay young
            and beautiful?
          </h1>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;