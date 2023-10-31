import "../assets/styles/stats.css";

function Stat({ stat }): JSX.Element {
  const percentage = Math.round(
    (stat.leftTeam * 100) / (stat.leftTeam + stat.rightTeam)
  );
  return (
    <div className="w-full my-4">
      <div className="flex justify-between items-center mb-3">
        <p>{stat.leftTeam}</p>
        <h4 className="uppercase text-stone-500 text-sm">
          {stat.statName === "Shots" ? "Total Shots" : stat.statName}
        </h4>
        <p>{stat.rightTeam}</p>
      </div>
      <div
        className={`${
          stat.leftTeam === 0 && stat.rightTeam === 0
            ? "bg-stone-700"
            : "bg-pink-700"
        } w-full  h-1`}
      >
        <div
          className={`${
            percentage === 0 || isNaN(percentage)
              ? "bg-stone-700"
              : "bg-blue-500 border-r-2 border-r-black h-1"
          } `}
          style={{ width: `${percentage === 0 ? "50" : percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Stat;
