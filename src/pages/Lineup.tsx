import { useEffect, useState } from "react";
import LineupHeader from "../components/LineupHeader";
import LineupList from "../components/LineupList";
import axios from "axios";
function Lineup(): JSX.Element {
  const [match, setMatch] = useState();
  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const getMatch = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACK_URL}/match`),
        ]);
        setMatch(getMatch[0].data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    match && (
      <div className="md:flex md:ml-6 md:justify-center md:gap-6">
        <div className="my-3">
          <LineupHeader teamInfo={match} team={"left"} />
          <LineupList teamInfo={match} team={"left"} />;
        </div>
        <div className="my-3">
          <LineupHeader teamInfo={match} team={"right"} />
          <LineupList teamInfo={match} team={"right"} />;
        </div>
      </div>
    )
  );
}

export default Lineup;
