import Container from "../common/Container";

function FooterCTA() {
  return (
    <div className="relative z-10">
      <Container>
        <div className="translate-y-16 rounded-xl bg-white px-8 py-10 shadow-xl">
          <h2 className="mb-8 text-3xl font-semibold">
            Still have questions?
          </h2>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <input
              type="text"
              placeholder="Your name"
              className="h-14 flex-1 rounded-full border px-6 outline-none"
            />

            <input
              type="text"
              placeholder="+91 XXXXXXXXXX"
              className="h-14 flex-1 rounded-full border px-6 outline-none"
            />

            <p className="text-xs text-gray-500 lg:max-w-[220px]">
              By clicking on the button, you agree to the processing of
              personal data
            </p>

            <button className="h-14 rounded-full bg-[#26D2B6] px-10 font-semibold text-white transition hover:opacity-90">
              ASK A QUESTION
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FooterCTA;