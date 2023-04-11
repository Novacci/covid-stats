import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core';

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
interface GlobalSummary {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface StatsTableProps {
  summaryArray: CountrySummary[];
  globalSummary: GlobalSummary;
}

const StatsTable = (props: StatsTableProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Country/Global</TableCell>
              <TableCell>Total Cases</TableCell>
              <TableCell>New Cases</TableCell>
              <TableCell>Total Deaths</TableCell>
              <TableCell>New Deaths</TableCell>
              <TableCell>Total Recovered</TableCell>
              <TableCell>New Recovered</TableCell>
              <TableCell>Population</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{1}</TableCell>
              <TableCell>{'Global'}</TableCell>
              <TableCell>{props.globalSummary.TotalConfirmed}</TableCell>
              <TableCell>{props.globalSummary.NewConfirmed}</TableCell>
              <TableCell>{props.globalSummary.TotalDeaths}</TableCell>
              <TableCell>{props.globalSummary.NewDeaths}</TableCell>
              <TableCell>{props.globalSummary.TotalRecovered}</TableCell>
              <TableCell>{props.globalSummary.NewRecovered}</TableCell>
            </TableRow>
            {props.summaryArray.map((countrySummary, index) => (
              <TableRow key={index}>
                <TableCell>{index + 2}</TableCell>
                <TableCell>{countrySummary.Country}</TableCell>
                <TableCell>{countrySummary.TotalConfirmed}</TableCell>
                <TableCell>{countrySummary.NewConfirmed}</TableCell>
                <TableCell>{countrySummary.TotalDeaths}</TableCell>
                <TableCell>{countrySummary.NewDeaths}</TableCell>
                <TableCell>{countrySummary.TotalRecovered}</TableCell>
                <TableCell>{countrySummary.NewRecovered}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StatsTable;
