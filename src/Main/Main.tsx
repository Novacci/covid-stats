import './Main.scss';
import { useEffect, useState } from 'react';
import StatsTable from '../Table/StatsTable';
interface CountrySummary {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
const Main = () => {
  const [summaryArray, setSummaryArray] = useState<CountrySummary[]>([]);
  const [globalSummary, setGlobalSummary] = useState({
    Country: '',
    Date: '',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  });

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

      if (data) {
        setSummaryArray(data.Countries);
        setGlobalSummary(data.Global);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StatsTable summaryArray={summaryArray} globalSummary={globalSummary} />
    </>
  );
};

export default Main;
