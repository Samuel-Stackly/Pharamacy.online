import { ArrowRight } from "lucide-react";

import woman from "../../../assets/images/blog/blog-highlight.svg";

const points = [
  "On the other hand, the beginning of daily work on the formation of a position ensures a wide circle (specialists) participation in the formation of directions for progressive development. Everyday practice shows that the scope and location of personnel training allows you to carry out important tasks in developing a development model.",

  "Everyday practice shows that consultation with a wide range of assets requires us to analyze the positions taken by the participants in relation to the assigned tasks. Higher-order ideological considerations, as well as the existing structure of the organization, represent an interesting experiment in testing essential financial and administrative conditions.",

  "Likewise, starting the daily work of forming a position allows you to evaluate the significance of new proposals. Everyday practice shows that the further development of various forms of activity plays an important role in the formation of significant financial and administrative conditions.",

  "It should not be forgotten, however, that the further development of various forms of activity contributes to the preparation and implementation of new proposals. Diverse and rich experience, constant quantitative growth and the scope of our activity plays an important role in shaping the directions of progressive development.",
];

function ArticleHighlight() {
  return (
    <section className="mt-16">
      <h2 className="text-[42px] font-bold text-[#303030]">
        Heading h5
      </h2>

      <p className="mt-8 leading-9 text-[#666666]">
        On the other hand, the beginning of daily work on the formation of a
        position ensures a wide circle (specialists) participation in the
        formation of directions for progressive development. Everyday practice
        shows that the scope and location of personnel training allows you to
        carry out important tasks in developing a development model.
      </p>

      <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-center">
        <img
          src={woman}
          alt="Article"
          className="h-[180px] w-full rounded-xl object-cover lg:w-[330px]"
        />

        <div>
          <h3 className="text-5xl font-bold leading-tight text-[#303030]">
            How does a woman prepare for the birth of a child?
          </h3>

          <button className="mt-6 flex items-center gap-2 text-[#31D4B5]">
            Read more

            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-5"
          >
            <span className="mt-3 h-2 w-2 rounded-full bg-[#31D4B5]" />

            <p className="leading-9 text-[#666666]">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticleHighlight;