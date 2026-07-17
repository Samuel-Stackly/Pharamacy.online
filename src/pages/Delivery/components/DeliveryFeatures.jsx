import sms from "../../../assets/images/delivery/step-1.svg";
import transport from "../../../assets/images/delivery/step-2.svg";
import courier from "../../../assets/images/delivery/step-3.svg";
import deliveryTime from "../../../assets/images/delivery/step-4.svg";

const features = [
  {
    icon: sms,
    title: "SMS with the courier's phone number on the day of delivery",
  },
  {
    icon: transport,
    title: "Careful transport under proper conditions",
  },
  {
    icon: courier,
    title: "Courier calls before delivery",
  },
  {
    icon: deliveryTime,
    title: "Delivery at a convenient time interval",
  },
];

function DeliveryFeatures() {
  return (
    <section className="my-12">
      <div className="grid gap-3 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative flex min-h-[92px] items-center bg-gradient-to-r from-[#F9FCFB] to-[#EEF9F5] px-6"
            style={{
              clipPath:
                "polygon(0 0,90% 0,100% 50%,90% 100%,0 100%,7% 50%)",
            }}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="mr-4 h-12 w-12 shrink-0 object-contain"
            />

            <p className="text-[14px] leading-5 text-[#555555]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeliveryFeatures;