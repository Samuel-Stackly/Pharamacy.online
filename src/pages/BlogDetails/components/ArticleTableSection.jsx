import { Pill } from "lucide-react";

import ArticleTable from "./ArticleTable";

function ArticleTableSection() {
  return (
    <section className="mt-16">
      <h2 className="text-[42px] font-bold text-[#303030]">
        Heading h4
      </h2>

      <p className="mt-8 leading-9 text-[#666666]">
        On the other hand, the beginning of daily work on the formation of a
        position ensures a wide circle (specialists) participation in the
        formation of directions for progressive development. Everyday practice
        shows that the scope and place of personnel training allows you to carry
        out important tasks in developing a development model.
      </p>

      <div className="mt-10 flex items-start gap-6 rounded-[24px] bg-[#F7F9FB] p-8">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
          <Pill
            size={28}
            className="text-[#31D4B5]"
          />
        </div>

        <p className="leading-8 text-[#666666]">
          Everyday practice shows that consultation with a wide range of assets
          requires us to analyze the positions taken by the participants in
          relation to the assigned tasks.
        </p>
      </div>

      <p className="mt-10 leading-9 text-[#666666]">
        Higher-order ideological considerations, as well as the existing
        structure of the organization, represent an interesting experiment in
        testing essential financial and administrative conditions. Likewise,
        starting the daily work of forming a position allows you to evaluate the
        significance of new proposals.
      </p>

      <ArticleTable />
    </section>
  );
}

export default ArticleTableSection;