import { useState, useEffect } from 'react';
import './Dashboard.scss';
import { Widget } from '../Widget/Widget';

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
  const { summaryArray } = props;
  const topNewConfirmed = summaryArray.sort(
    (a: CountrySummary, b: CountrySummary) => b.NewConfirmed - a.NewConfirmed
  )[0];
  const topNewRecovered = summaryArray.sort(
    (a: CountrySummary, b: CountrySummary) => b.NewRecovered - a.NewRecovered
  )[0];
  const topNewDeaths = summaryArray.sort(
    (a: CountrySummary, b: CountrySummary) => b.NewDeaths - a.NewDeaths
  )[0];

  return (
    <>
      <div className="space-container">
        <div className="dash-container">
          <Widget
            label="Most new infected"
            country={topNewConfirmed.Country}
            value={topNewConfirmed.NewConfirmed}
            flag={topNewConfirmed.CountryCode.toLowerCase()}
          />
          <Widget
            label="Most recent deaths"
            country={topNewDeaths.Country}
            value={topNewDeaths.NewDeaths}
            flag={topNewDeaths.CountryCode.toLowerCase()}
          />
          <Widget
            label="Most recoveries"
            country={topNewRecovered.Country}
            value={topNewRecovered.NewRecovered}
            flag={topNewRecovered.CountryCode.toLowerCase()}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
