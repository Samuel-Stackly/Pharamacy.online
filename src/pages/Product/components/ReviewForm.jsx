import { Star } from "lucide-react";

function ReviewForm() {
  return (
    <div className="rounded-3xl bg-[#F8FCFC] p-8">
      <h3 className="text-2xl font-semibold text-[#303030]">
        Leave feedback
      </h3>

      <p className="mt-5 text-sm text-[#666]">
        Rating:
      </p>

      <div className="mt-2 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={22}
            className="fill-[#FFC542] text-[#FFC542]"
          />
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <input
          placeholder="Your name"
          className="rounded-full border border-[#DDE5EA] px-6 py-4 outline-none focus:border-[#31D4B5]"
        />

        <input
          placeholder="Your email"
          className="rounded-full border border-[#DDE5EA] px-6 py-4 outline-none focus:border-[#31D4B5]"
        />
      </div>

      <textarea
        rows={5}
        placeholder="Write a detailed review..."
        className="mt-5 w-full rounded-3xl border border-[#DDE5EA] p-5 outline-none focus:border-[#31D4B5]"
      />

      <div className="mt-6 flex flex-wrap items-center gap-5">
        <button className="rounded-full bg-[#31D4B5] px-10 py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#27B99E]">
          Send
        </button>

        <p className="max-w-[320px] text-xs leading-5 text-[#999]">
          By clicking the button, you agree to the processing
          of personal data.
        </p>
      </div>
    </div>
  );
}

export default ReviewForm;