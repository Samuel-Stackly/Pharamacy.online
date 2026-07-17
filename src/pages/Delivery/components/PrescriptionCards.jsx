const cards = [
  {
    title: "Delivery of over-the-counter medications",
    description:
      "According to Presidential Decree No. 187 of March 17, 2020 on the remote sale of over-the-counter medicines, home delivery of over-the-counter medicines, as well as dietary supplements, medical products, household and beauty products, household chemicals and related products is carried out.",
  },
  {
    title: "Delivery of prescription drugs",
    description:
      "Delivery of prescription drugs, if there is a prescription written by a doctor, is carried out to the nearest pharmacy.",
  },
];

function PrescriptionCards() {
  return (
    <section className="py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[24px] bg-[#F7F9FB] px-10 py-9"
          >
            <h3 className="text-[20px] font-bold leading-8 text-[#303030]">
              {card.title}
            </h3>

            <p className="mt-8 text-[15px] leading-8 text-[#777777]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrescriptionCards;