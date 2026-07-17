const history = [
  {
    year: "2005-2008",
    description:
      "Diverse and rich experience, the beginning of daily work on position formation, contributes to the preparation and implementation of a personnel training system that meets urgent needs. Likewise, the framework and location of personnel training provides a wide range of services.",
  },
  {
    year: "2008-2012",
    description:
      "Diverse and rich experience, the beginning of daily work on position formation, contributes to the preparation and implementation of a personnel training system that meets urgent needs. Likewise, the framework and location of personnel training provides a wide range of services.",
  },
  {
    year: "2012-2016",
    description:
      "Diverse and rich experience, the beginning of daily work on position formation, contributes to the preparation and implementation of a personnel training system that meets urgent needs. Likewise, the framework and location of personnel training provides a wide range of services.",
  },
  {
    year: "2016-2018",
    description:
      "Diverse and rich experience, the beginning of daily work on position formation, contributes to the preparation and implementation of a personnel training system that meets urgent needs. Likewise, the framework and location of personnel training provides a wide range of services.",
  },
  {
    year: "2018-2020",
    description:
      "Diverse and rich experience, the beginning of daily work on position formation, contributes to the preparation and implementation of a personnel training system that meets urgent needs. Likewise, the framework and location of personnel training provides a wide range of services.",
  },
  {
    year: "2020-2021",
    description:
      "Diverse and rich experience, the beginning of daily work on position formation, contributes to the preparation and implementation of a personnel training system that meets urgent needs. Likewise, the framework and location of personnel training provides a wide range of services.",
  },
];

function HistorySection() {
  return (
    <section className="mt-20">
      <h2 className="text-[34px] font-bold text-[#24325B]">
        Founding history
      </h2>

      <div className="mt-8 max-w-6xl">
        <p className="text-[15px] leading-8 text-[#777777]">
          The history of NEOPHARM Group of Companies began in 2000 as a small
          family business - with the opening of several pharmacy kiosks in the
          Krasnogorsk district of the Moscow region. And it was headed by a
          pharmacist, a graduate of the first medical institute named after
          Sechenov - Evgeny Nifantiev. And in 2013, on Tobukhina Street, the
          first pharmacy under the Stolichka brand was opened, which attracted
          not only local residents, but also people from surrounding
          neighborhoods and even Odintsovo near Moscow. It became clear that
          the social pharmacy format was in demand by the population and
          Stolichki began to open one by one, rapidly expanding its geographic
          presence.
        </p>
      </div>

      <div className="mt-12 rounded-[28px] bg-[#F7F9FB] p-10 lg:p-14">
        <h3 className="text-[30px] font-bold text-[#303030]">
          History of our development
        </h3>

        <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {history.map((item) => (
            <div key={item.year}>
              <h4 className="text-xl font-semibold text-[#303030]">
                {item.year}
              </h4>

              <p className="mt-4 text-[14px] leading-7 text-[#777777]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HistorySection;