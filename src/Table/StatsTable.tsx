import './StatsTable.scss';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
} from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

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
      <StylesProvider injectFirst>
        <div className="table-position">
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
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{1}</TableCell>
                  <TableCell>{'Global'}</TableCell>
                  <TableCell>
                    {props.globalSummary.TotalConfirmed.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {props.globalSummary.NewConfirmed.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {props.globalSummary.TotalDeaths.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {props.globalSummary.NewDeaths.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {props.globalSummary.TotalRecovered.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {props.globalSummary.NewRecovered.toLocaleString()}
                  </TableCell>
                </TableRow>
                {props.summaryArray.map((countrySummary, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 2}</TableCell>
                    <TableCell>{countrySummary.Country}</TableCell>
                    <TableCell>
                      {countrySummary.TotalConfirmed.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {countrySummary.NewConfirmed.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {countrySummary.TotalDeaths.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {countrySummary.NewDeaths.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {countrySummary.TotalRecovered.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {countrySummary.NewRecovered.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination /> */}
        </div>
      </StylesProvider>
    </>
  );
};

export default StatsTable;
