import './Main.scss';
import { useEffect, useState } from 'react';
import StatsTable from '../Table/StatsTable';

const Main = () => {
  const [summaryArray, setSummaryArray] = useState([]);

  useEffect(() => {
    getCovidDailySummary();
  }, []);

  const getCovidDailySummary = async () => {
    try {
      const response = await fetch(`https://api.covid19api.com/summary`, {
        headers: {
          method: 'GET',
          redirect: 'follow',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StatsTable />
    </>
  );
};

export default Main;
