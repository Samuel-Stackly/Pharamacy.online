import {
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import Container from "../common/Container";
import logo from "../../assets/icons/Logo.svg";

const companyLinks = [
  "Pickup from pharmacies",
  "Delivery",
  "Legal entities",
  "Payment",
  "License",
];

const supportLinks = [
  "Feedback",
  "Advertising on the site",
  "Franchise",
  "Vacancies",
  "Privacy Policy",
  "User Agreement",
];

function FooterMain() {
  return (
    <div className="bg-gradient-to-r from-[#14328E] to-[#29D1B6] pt-24 pb-12 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.6fr]">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-12" />

             
            </div>

            <p className="mt-12 max-w-[180px] text-xs leading-6 text-white/70">
              All rights reserved and protected by law
            </p>
          </div>

          {/* Company */}
          <div>
            <ul className="space-y-4 text-sm">
              {companyLinks.map((item) => (
                <li key={item}>
                  <button className="transition hover:text-white/70">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <ul className="space-y-4 text-sm">
              {supportLinks.map((item) => (
                <li key={item}>
                  <button className="transition hover:text-white/70">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <div className="flex items-start gap-3">
              <FiMail className="mt-1 text-[#39E2C7]" size={18} />

              <div>
                <h4 className="font-semibold">
                  INFO@RESTOLL.RU
                </h4>

                <p className="text-xs text-white/70">
                  Write to us
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone className="mt-1 text-[#39E2C7]" size={18} />

              <div>
                <h4 className="font-semibold">
                  8-800-777-22-33
                </h4>

                <p className="text-xs text-white/70">
                  Around the clock
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                <FiInstagram size={16} />
              </button>

              <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                <FiTwitter size={16} />
              </button>

              <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
                <FiYoutube size={16} />
              </button>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-start gap-3">
              <FiMapPin
                className="mt-1 text-[#39E2C7]"
                size={18}
              />

              <div className="text-sm leading-6 text-white/80">
  <p>
    Limited Liability Company "eApteka"
    <br />
    Moscow, Frunzenskaya embankment, building 42, ground floor, premises I, room 2
  </p>

  <p className="mt-3">
    License: LO-50-02-007632 dated November 27, 2020
    <br />
    License: LO-77-02-011346 dated December 22, 2020
  </p>

  <p className="mt-3">
    OGRN: 1147746631988
    <br />
    INN: 7704865540
  </p>
</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FooterMain;