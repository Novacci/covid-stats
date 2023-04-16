import { useState, useEffect } from 'react';
import './Dashboard.scss';

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
interface summaryType {
  summaryArray: CountrySummary[];
}
const Dashboard = (props: summaryType) => {
  useEffect(() => {
    const { summaryArray } = props;

    const sortedData = summaryArray.sort(
      (a: CountrySummary, b: CountrySummary) => b.NewConfirmed - a.NewConfirmed
    );

    const mostHighlightsData = sortedData[0];
    setMostCovidData(mostHighlightsData);
  }, []);
  const [mostCovidData, setMostCovidData] = useState<CountrySummary>({
    Country: '',
    CountryCode: '',
    Date: '',
    ID: '',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: '',
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  });

  return (
    <>
      <div className="space-container">
        <div className="dash-position">
          <div className="dash-container">
            {`Most new Covid-19 infected in: ${mostCovidData.Country}`}
            <div>{mostCovidData.NewConfirmed}</div>
          </div>
          <div className="dash-container">
            {`Most recent deaths by Covid-19 in: ${mostCovidData.Country}`}
            <div>{mostCovidData.NewDeaths}</div>
          </div>
          <div className="dash-container">
            {`The largest number of recent recoveries from Covid-19 in: ${mostCovidData.Country}`}
            <div>{mostCovidData.NewRecovered}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
