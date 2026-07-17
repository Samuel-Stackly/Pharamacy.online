const steps = [
  "On the other hand, the beginning of daily work on the formation of a position ensures a wide circle (specialists) participation in the formation of directions for progressive development. Everyday practice shows that the scope and location of personnel training allows us to carry out important tasks in developing a development model.",

  "Everyday practice shows that consultation with a wide range of assets requires us to analyze the positions taken by the participants in relation to the assigned tasks. Higher-order ideological considerations, as well as the existing structure of the organization, represent an interesting experiment in testing essential financial and administrative conditions.",

  "Likewise, starting the daily work of forming a position allows you to evaluate the significance of new proposals. Everyday practice shows that the further development of various forms of activity plays an important role in the formation of significant financial and administrative conditions. The significance of these problems is so obvious.",

  "It should not be forgotten, however, that the further development of various forms of activity contributes to the preparation and implementation of new proposals. Diverse and rich experience, constant quantitative growth and the scope of our activity plays an important role in shaping the directions of progressive development. Likewise, the scope and location of personnel training require us to analyze the personnel training system that meets pressing needs.",
];

function ArticleSteps() {
  return (
    <section className="mt-16 p-8">
      <h3 className="text-[42px] font-bold text-[#303030]">
        Heading h3
      </h3>

      <p className="mt-8 leading-9 text-[#666666]">
        On the other hand, the beginning of daily work on the formation of a
        position ensures a wide circle (specialists) participation in the
        formation of directions for progressive development. Everyday practice
        shows that the scope and location of personnel training allows us to
        carry out important tasks in developing a development model. Everyday
        practice shows that consultation with a wide range of assets requires us
        to analyze the positions taken by the participants in relation to the
        assigned tasks. Higher-order ideological considerations, as well as the
        existing structure of the organization, represent an interesting
        experiment in testing essential financial and administrative
        conditions.
      </p>

      <div className="mt-12 space-y-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#D9E2EC] text-sm font-semibold text-[#303030]">
              {index + 1}
            </div>

            <p className="leading-9 text-[#666666]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticleSteps;