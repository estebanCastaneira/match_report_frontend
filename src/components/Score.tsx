import training from "../assets/icons/training-icon.svg";

function Score({ score }): JSX.Element {
  const result = (score) => {
    if (score[0] > score[1]) return 1;
    if (score[0] === score[1]) return 0;
    if (score[0] < score[1]) return -1;
  };
  return (
    score && (
      <div className="flex flex-col items-center justify-center ">
        <div
          className={`bg-stone-900 ${
            result > 0
              ? "border-l-2 border-green-400"
              : result === 0
              ? ""
              : "border-r-2 border-green-400"
          }  w-full`}
        >
          <div className="flex justify-around py-2 px-3 gap-4">
            <p className="">{score[0]}</p>
            <div className="border-r border-r-stone-600 "></div>
            <p className="">{score[1]}</p>
          </div>
        </div>
        <div>
          <p
            className={`${
              result > -1 ? "text-green-400" : ""
            } my-3 text-light text-xs`}
          >
            {result === 1
              ? "+ 3 points"
              : result === 0
              ? "+ 1 points"
              : "0 points"}
          </p>
        </div>

        <div className="flex flex-row justify-center gap-1">
          <img src={training} className="training-icon" />
          <p className="text-sm">4</p>
        </div>
      </div>
    )
  );
}

export default Score;
