import Score from "./Score";
import LeftTeam from "./LeftTeam";
import RightTeam from "./RightTeam";
import Stat from "./Stat";
import Attack from "./Attack";
import axios from "axios";
import { useEffect, useState } from "react";
import createStats from "../functions/createStats";

function Results(): JSX.Element {
  const [stats, setStats] = useState();
  const [score, setScore] = useState();

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const [getStats, getMatch] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACK_URL}/stats`),
          axios.get(`${import.meta.env.VITE_BACK_URL}/match`),
        ]);
        const allStats = {
          leftTeam: getStats.data.leftTeam,
          rightTeam: getStats.data.rightTeam,
        };
        setStats(createStats(allStats));
        setScore(getMatch.data.score);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    stats && (
      <div className="mx-4 md:mx-0">
        <div className="flex justify-around border-b py-4  border-b-neutral-900 md:justify-center md:gap-7 md:mx-auto">
          <LeftTeam />
          <Score score={score} />
          <RightTeam />
        </div>
        <div className="mt-5 mx-5 md:mx-0 md:flex md:justify-between md:px-6 md:gap-20 flex-col-2 flex-row-reverse">
          <div className="hidden md:block w-full">
            <Attack stats={stats} />
          </div>
          <div className="w-full">
            {stats.statsArr.map((stat, i) => (
              <Stat key={i} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Results;
