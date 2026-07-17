function CallbackForm() {
  return (
    <div className="rounded-[28px] bg-white p-8 shadow-xl shadow-[#00000010]">
      <h2 className="text-[36px] font-bold leading-tight text-[#303030]">
        We will call you back
      </h2>

      <div className="mt-10 space-y-6">
        <input
          type="text"
          placeholder="Ivanov Ivan Ivanovich"
          className="h-14 w-full rounded-full border border-[#DDE5EA] px-6 text-[15px] outline-none transition focus:border-[#31D4B5]"
        />

        <input
          type="tel"
          placeholder="+7 (___) ___-__-__"
          className="h-14 w-full rounded-full border border-[#DDE5EA] px-6 text-[15px] outline-none transition focus:border-[#31D4B5]"
        />
      </div>

      <p className="mx-auto mt-8 max-w-[250px] text-center text-xs leading-5 text-[#9A9A9A]">
        By clicking on the button, you agree to the processing of personal
        data
      </p>

      <button className="mt-8 h-14 w-full rounded-full bg-[#31D4B5] text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#28BEA4]">
        Call me back
      </button>
    </div>
  );
}

export default CallbackForm;