import license from "../../../assets/images/home/licence.svg";

function LicenseContent() {
  return (
    <section className="mt-10">
      <p className="max-w-6xl text-[15px] leading-8 text-[#777777]">
        The network of social pharmacies STOLICHKI is part of the Neopharm
        pharmacy holding. The first pharmacy in Moscow was opened in 2000.
        Our mission from day one has been simple: make medicine affordable.
        We have shortened the path of medicines from manufacturer to consumer
        as much as possible. By working directly with manufacturers and
        distributors, we not only provide medicines at low prices, but also
        guarantee the authenticity of the goods.
      </p>

      <div className="mt-12">
        <img
          src={license}
          alt="License"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
}

export default LicenseContent;