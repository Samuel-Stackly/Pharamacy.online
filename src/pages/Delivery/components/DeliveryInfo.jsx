import step1 from "../../../assets/images/delivery/step-1.svg";
import step2 from "../../../assets/images/delivery/step-2.svg";
import step3 from "../../../assets/images/delivery/step-3.svg";
import step4 from "../../../assets/images/delivery/step-4.svg";

const info = [
  {
    icon: step1,
    text1:
      "Everyday practice shows that the implementation of planned targets largely determines the creation of further development directions. The implementation of planned targets entails the process of introducing and modernizing forms of development.",
    text2:
      "Diverse and rich experience strengthening and developing the structure plays an important role in the formation of new proposals. Ideological considerations of a higher order, as well as the beginning of the daily work of forming a position, require the definition and clarification of systems of mass participation.",
  },
  {
    icon: step2,
    text1:
      "Everyday practice shows that the implementation of planned targets largely determines the creation of further development directions. The implementation of planned targets entails the process of introducing and modernizing forms of development.",
    text2:
      "Diverse and rich experience strengthening and developing the structure plays an important role in the formation of new proposals. Ideological considerations of a higher order, as well as the beginning of the daily work of forming a position, require the definition and clarification of systems of mass participation.",
  },
  {
    icon: step3,
    text1:
      "Everyday practice shows that the implementation of planned targets largely determines the creation of further development directions. The implementation of planned targets entails the process of introducing and modernizing forms of development.",
    text2:
      "Diverse and rich experience strengthening and developing the structure plays an important role in the formation of new proposals. Ideological considerations of a higher order, as well as the beginning of the daily work of forming a position, require the definition and clarification of systems of mass participation.",
  },
  {
    icon: step4,
    text1:
      "Everyday practice shows that the implementation of planned targets largely determines the creation of further development directions. The implementation of planned targets entails the process of introducing and modernizing forms of development.",
    text2:
      "Diverse and rich experience strengthening and developing the structure plays an important role in the formation of new proposals. Ideological considerations of a higher order, as well as the beginning of the daily work of forming a position, require the definition and clarification of systems of mass participation.",
  },
];

function DeliveryInfo() {
  return (
    <section className="py-8">
      <h2 className="mb-10 text-[34px] font-bold text-[#303030]">
        Delivery information
      </h2>

      <div className="grid gap-x-12 gap-y-14 lg:grid-cols-2">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-6"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#31D4B5]">
              <img
                src={item.icon}
                alt=""
                className="h-7 w-7 object-contain"
              />
            </div>

            <div>
              <p className="text-[14px] leading-7 text-[#666666]">
                {item.text1}
              </p>

              <p className="mt-6 text-[14px] leading-7 text-[#666666]">
                {item.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeliveryInfo;