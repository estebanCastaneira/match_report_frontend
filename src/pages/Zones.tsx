import Attack from "../components/Attack";
import LeftTeam from "../components/LeftTeam";
import RightTeam from "../components/RightTeam";
import Score from "../components/Score";
import { useState, useEffect } from "react";
import createStats from "../functions/createStats";
import axios from "axios";

function Zones(): JSX.Element {
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
    stats &&
    score && (
      <div className="flexw-2/3">
        <div className="flex justify-evenly border-b-neutral-900 items-start my-5">
          <LeftTeam />
          <Score score={score} />
          <RightTeam />
        </div>
        <div className="flex flex-col items-center">
          <Attack stats={stats} />
        </div>
      </div>
    )
  );
}

export default Zones;
