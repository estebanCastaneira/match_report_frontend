import Player from "./Player";
import condition from "../assets/icons/condition.svg";

function LineupList({ teamInfo, team }): JSX.Element {
  return (
    <div className="">
      <table className="w-full border border-neutral-900 text-white">
        <thead className="bg-neutral-900">
          <tr className="border border-neutral-800">
            <th scope="col" className="px-2 py-2 border-r border-neutral-800">
              <p className="text-sm font-light">Lineup</p>
            </th>
            <th
              scope="col"
              className="px-2 py-2 border-r border-neutral-800 w-5/12"
            >
              <p className="text-sm text-left font-light">Player</p>
            </th>
            <th
              scope="col"
              className="text-sm px-2 py-2 border-r border-neutral-800 flex justify-center"
            >
              <img src={condition} alt="Player condition icon" />
            </th>
            <th scope="col" className="px-2 py-2">
              <p className="text-sm font-light">Rating</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {team === "left"
            ? teamInfo.leftLineup.map((player) => (
                <Player key={player.id} player={player} />
              ))
            : teamInfo.rightLineup.map((player) => (
                <Player key={player.id} player={player} />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default LineupList;
