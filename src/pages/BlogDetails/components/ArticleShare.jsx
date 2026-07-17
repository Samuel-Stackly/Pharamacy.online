import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
  FaVk,
  FaOdnoklassniki,
  FaStar,
} from "react-icons/fa";

const socials = [
  {
    icon: FaFacebookF,
    color: "#3B5998",
    count: 154,
  },
  {
    icon: FaVk,
    color: "#4C75A3",
    count: 234,
  },
  {
    icon: FaTwitter,
    color: "#55ACEE",
    count: 112,
  },
  {
    icon: FaTelegramPlane,
    color: "#35A5E5",
    count: 421,
  },
  {
    icon: FaOdnoklassniki,
    color: "#F7931E",
    count: 241,
  },
  {
    icon: FaYoutube,
    color: "#FF0000",
    count: 241,
  },
];

function ArticleShare() {
  return (
    <section className="mt-20 rounded-[24px] bg-[#F8F9FB] p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <h3 className="text-2xl font-bold text-[#303030]">
            Enjoyed the article? Share it with your friends!
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map(({ icon: Icon, color, count }, index) => (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className="flex h-11 items-center gap-3 rounded px-4 text-white transition hover:opacity-90"
              >
                <Icon size={16} />

                <span className="text-xs font-semibold">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="text-center lg:text-right">
          <h3 className="text-2xl font-bold text-[#303030]">
            Rate this article
          </h3>

          <div className="mt-4 flex justify-center gap-2 lg:justify-end">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={22}
                className={
                  index < 4
                    ? "text-[#F6B400]"
                    : "text-[#D9D9D9]"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleShare;