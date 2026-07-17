import { FaInstagram, FaTelegramPlane, FaVk } from "react-icons/fa";

const socials = [
  {
    icon: FaVk,
    username: "/namepublick",
  },
  {
    icon: FaInstagram,
    username: "@namepublick",
  },
  {
    icon: FaTelegramPlane,
    username: "/namepublick",
  },
];

function SocialCard() {
  return (
    <div className="rounded-[28px] bg-[#F7F9FB] p-8">
      <h3 className="text-center text-xl font-semibold leading-7 text-[#303030]">
        Join us on social
        <br />
        networks
      </h3>

      <div className="mt-10 space-y-6">
        {socials.map(({ icon: Icon, username }, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE5EA] bg-white">
              <Icon
                size={18}
                className="text-[#31D4B5]"
              />
            </div>

            <span className="text-sm text-[#666666]">
              {username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialCard;