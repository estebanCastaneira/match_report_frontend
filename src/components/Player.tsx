// import fooball from "../assets/icons/football.svg";
import { positions } from "../data/data.js";
import { positionsColors } from "../data/data.js";

function Player({ player }): JSX.Element {
  const playerPosition = player.position
    .split("")
    .filter((char) => char !== " ")
    .join("");
  const zaraza = positions[playerPosition];
  const color = positionsColors[zaraza];
  return (
    <tr className="font-bold broder border-b-neutral-800">
      <td className="px-2 py-2 border-r border-b  border-neutral-800">
        <p className="inline mr-2">{player.dorsal}</p>
        <p className={`inline font-light uppercase condstd-bold ${color}`}>
          {positions[playerPosition]}
        </p>
      </td>
      <td className="px-2 py-2 border-r border-b  border-neutral-800 w-4/12">
        <p className="inline uppercase condstd-bold">
          {player.player.name}.{player.player.lastName}
        </p>
        {/* 
          <img width={20} height={10} src={fooball} alt="football" /> */}
      </td>
      <td className="px-2 py-2 border-r border-b border-neutral-800 text-center">
        <p className="inline font-light">{player.player.condition}</p>
      </td>
      <td className="px-2 py-2 border-r border-b border-neutral-800 text-center">
        <p className="inline font-light ">8.4</p>
      </td>
    </tr>
  );
}

export default Player;
