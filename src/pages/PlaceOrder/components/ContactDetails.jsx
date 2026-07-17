import { Check } from "lucide-react";

function ContactDetails() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-[#303030]">
        Contact details
      </h2>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr_1fr_auto]">
        <input
          type="text"
          placeholder="Last Name First Name Patronymic"
          className="rounded-full border border-[#DDE5EA] px-6 py-4 outline-none transition focus:border-[#31D4B5]"
        />

        <input
          type="email"
          placeholder="Email"
          className="rounded-full border border-[#DDE5EA] px-6 py-4 outline-none transition focus:border-[#31D4B5]"
        />

        <input
          type="tel"
          placeholder="Your phone"
          className="rounded-full border border-[#DDE5EA] px-6 py-4 outline-none transition focus:border-[#31D4B5]"
        />

        <label className="flex cursor-pointer items-center gap-3 whitespace-nowrap">
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#31D4B5] bg-[#31D4B5]">
            <Check
              size={12}
              className="text-white"
            />
          </div>

          <span className="text-sm leading-5 text-[#555]">
            Send
            <br />
            SMS notification
          </span>
        </label>
      </div>
    </div>
  );
}

export default ContactDetails;