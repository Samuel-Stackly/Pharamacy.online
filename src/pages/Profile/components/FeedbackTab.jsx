import Button from "../../../components/common/Button";


function FeedbackTab() {
  return (
    <section className="mt-24">
      <h2 className="text-5xl font-bold text-[#24325B]">
        Feedback
      </h2>

      <div className="mt-10 rounded-[32px] bg-white p-10 shadow-xl shadow-[#00000008]">
        <h3 className="max-w-4xl text-[34px] leading-snug text-[#303030]">
          Diverse and rich experience and the existing
          structure of the organization require the
          definition and clarification of the
          development model.
        </h3>

        <p className="mt-8 max-w-4xl text-[#777] leading-8">
          Ideological considerations of a higher order,
          as well as the existing structure of the
          organization, play an important role in the
          formation of systems of mass participation.
        </p>

        <form className="mt-10 space-y-6">
          <select className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 outline-none">
            <option>Select a topic</option>
          </select>

          <input
            type="text"
            placeholder="Last name, first name and patronymic"
            className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 outline-none"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <input
              placeholder="Phone"
              className="h-14 rounded-full border border-[#D8E1EE] px-6 outline-none"
            />

            <input
              placeholder="Your mail"
              className="h-14 rounded-full border border-[#D8E1EE] px-6 outline-none"
            />
          </div>

          <input
            placeholder="Message text"
            className="h-14 w-full rounded-full border border-[#D8E1EE] px-6 outline-none"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <Button className="w-[220px]">
              Write to me
            </Button>

            <p className="max-w-sm text-sm text-[#999]">
              By clicking on the button, you agree to
              the processing of personal data
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FeedbackTab;