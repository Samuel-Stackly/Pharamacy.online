import {
  Clock3,
  Mail,
  MapPinned,
  PhoneCall,
} from "lucide-react";

function ContactInfo() {
  return (
    <div>
      <div className="flex items-start gap-4">
        <MapPinned
          size={22}
          className="mt-1 shrink-0 text-[#31D4B5]"
        />

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A]">
            Head Office
          </p>

          <h2 className="mt-2 text-[36px] leading-tight font-bold text-[#303030]">
            129226, Moscow,
            <br />
            st. Dokukina, 16,
            <br />
            building 1, 6th floor
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div className="flex items-start gap-4">
          <PhoneCall
            size={20}
            className="mt-1 shrink-0 text-[#6C6C6C]"
          />

          <div>
            <h3 className="text-[24px] font-bold text-[#303030]">
              8-800-777-22-33
            </h3>

            <p className="mt-1 text-sm text-[#9A9A9A]">
              Request a call
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <PhoneCall
            size={20}
            className="mt-1 shrink-0 text-[#6C6C6C]"
          />

          <div>
            <h3 className="text-[24px] font-bold text-[#303030]">
              8 (495) 223-34-03
            </h3>

            <p className="mt-1 text-sm text-[#9A9A9A]">
              Free in Russia
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock3
            size={20}
            className="mt-1 shrink-0 text-[#6C6C6C]"
          />

          <div>
            <h3 className="text-[24px] font-bold text-[#303030]">
              8:00 - 22:00
            </h3>

            <p className="mt-1 text-sm text-[#9A9A9A]">
              No holidays
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail
            size={20}
            className="mt-1 shrink-0 text-[#6C6C6C]"
          />

          <div>
            <h3 className="text-[24px] font-bold text-[#303030]">
              info@restoll.ru
            </h3>

            <p className="mt-1 text-sm text-[#9A9A9A]">
              Write to us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;