function PersonalDetailsForm() {
  return (
    <div>
      <h2 className="text-[36px] font-bold text-[#24325B]">
        Personal account
      </h2>

      <form className="mt-8 space-y-8">
        {/* Name */}

        <input
          type="text"
          placeholder="Please indicate your last name, first name and patronymic"
          className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 text-[15px] outline-none transition focus:border-[#31D4B5]"
        />

        {/* Birthday */}

        <div>
          <label className="mb-3 block text-xs font-semibold uppercase text-[#8C8C8C]">
            Date of birth
          </label>

          <div className="grid gap-4 md:grid-cols-[90px_1fr_110px_160px]">
            <select className="h-14 rounded-full border border-[#D8E1EE] px-5 outline-none">
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select className="h-14 rounded-full border border-[#D8E1EE] px-5 outline-none">
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>

            <select className="h-14 rounded-full border border-[#D8E1EE] px-5 outline-none">
              <option>Year</option>

              {Array.from({ length: 90 }, (_, i) => (
                <option key={2025 - i}>
                  {2025 - i}
                </option>
              ))}
            </select>

            <select className="h-14 rounded-full border border-[#D8E1EE] px-5 outline-none">
              <option>Gender</option>

              <option>Male</option>

              <option>Female</option>
            </select>
          </div>
        </div>

        {/* Email */}

        <input
          type="email"
          placeholder="Email"
          className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 outline-none transition focus:border-[#31D4B5]"
        />

        {/* Phone */}

        <input
          type="tel"
          placeholder="Phone"
          className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 outline-none transition focus:border-[#31D4B5]"
        />

        {/* Password */}

        <input
          type="password"
          placeholder="New password"
          className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 outline-none transition focus:border-[#31D4B5]"
        />

        {/* Confirm */}

        <input
          type="password"
          placeholder="Confirmation"
          className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 outline-none transition focus:border-[#31D4B5]"
        />

        <button
          type="submit"
          className="h-14 w-[180px] rounded-full bg-[#31D4B5] text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#28BEA4]"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;