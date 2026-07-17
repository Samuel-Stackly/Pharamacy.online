function CompanyDetails() {
  return (
    <div>
      <h2 className="text-[36px] font-bold text-[#303030]">
        Details
      </h2>

      <div className="mt-10 space-y-10">
        <div>
          <h3 className="text-lg font-semibold uppercase text-[#303030]">
            INN/KPP
          </h3>

          <p className="mt-3 text-[17px] leading-8 text-[#666666]">
            7451432180/745101001
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold uppercase text-[#303030]">
            Bank Account
          </h3>

          <p className="mt-3 text-[17px] leading-8 text-[#666666]">
            r/s 40702810010000281954
            <br />
            in AO "TINKOFF BANK"
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold uppercase text-[#303030]">
            BIK
          </h3>

          <p className="mt-3 text-[17px] leading-8 text-[#666666]">
            044525974
          </p>

          <p className="mt-2 text-[17px] leading-8 text-[#666666]">
            k/s 30101810145250000974
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;