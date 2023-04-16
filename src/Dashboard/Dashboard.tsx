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
  useEffect(() => {
    const { summaryArray } = props;

    const sortedData = summaryArray.sort(
      (a: CountrySummary, b: CountrySummary) => b.NewConfirmed - a.NewConfirmed
    );

    const mostHighlightsData = sortedData[0];
    // console.log(sortedData);
    setMostCovidData(mostHighlightsData);
  }, []);

  return (
    <>
      <div className="space-container">
        <div className="dash-position">
          <div className="dash-container">
            {`Most new infected in: `}
            <div className="country-style">{mostCovidData.Country}</div>
            <div className="number-style">{mostCovidData.NewConfirmed}</div>
            <img
              src={`flags/${mostCovidData.CountryCode.toLowerCase()}.png`}
              alt="Flag icon"
            />
          </div>
          <div className="dash-container">
            {`Most recent deaths in: `}
            <div className="country-style">{mostCovidData.Country}</div>
            <div className="number-style">{mostCovidData.NewDeaths}</div>
            <img
              src={`flags/${mostCovidData.CountryCode.toLowerCase()}.png`}
              alt="Flag icon"
            />
          </div>
          <div className="dash-container">
            {`Most recoveries in: `}
            <div className="country-style">{mostCovidData.Country}</div>
            <div className="number-style">{mostCovidData.NewRecovered}</div>
            <img
              src={`flags/${mostCovidData.CountryCode.toLowerCase()}.png`}
              alt="Flag icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
