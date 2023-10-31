import arrow from "../assets/images/arrow.svg";

function Flanks({ percentage }): JSX.Element {
  return (
    <>
      <div
        className="bar flex items-end justify-center"
        style={{ height: `${percentage * 100}%` }}
      >
        <img src={arrow} alt="arrow" className="absolute -top-[23.6px] arrow" />
        <p className="text-black mb-3 font-bold">
          {Math.round(percentage * 100)}%
        </p>
      </div>
    </>
  );
}

export default Flanks;
