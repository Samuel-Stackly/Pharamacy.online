import map from "../../../assets/images/home/map.png";

function Directions() {
  return (
    <section className="mt-20 p-5">
      <h2 className="text-[34px] font-bold text-[#24325B]">
        Directions
      </h2>

      <p className="mt-8 text-[16px] leading-8 text-[#666666]">
        m. Polezhaevskaya. The last car from the center, after the turnstile,
        turn left, exit to the stop also to the left. Trolleybuses 20, 35 or
        65 (to the stop "Boulevard of General Karbyshev")
      </p>

      <div className="mt-10 overflow-hidden rounded-[28px]">
        <img
          src={map}
          alt="Map"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Directions;