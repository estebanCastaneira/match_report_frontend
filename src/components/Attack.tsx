import field from "../assets/images/field.svg";
import Flanks from "./Flanks";

function Attack({ stats }): JSX.Element {
  const left = stats.attackZones.leftTeam.left;
  const middle = stats.attackZones.leftTeam.middle;
  const right = stats.attackZones.leftTeam.right;

  return (
    <div>
      <h2 className="text-sm text-center text-neutral-500 uppercase my-4">
        Attack Zones
      </h2>
      <div className="relative w-fit">
        <div className="h-full">
          <img src={field} alt="Field" className="relative z-30 " />
          <div className="chart absolute bottom-0 z-40">
            <Flanks percentage={left} />
            <Flanks percentage={middle} />
            <Flanks percentage={right} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attack;
