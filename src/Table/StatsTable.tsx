import './StatsTable.scss';
import {
  TextField,
  Typography,
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
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState('');

  const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const combinedFetchedDataInArray = [
    props.globalSummary,
    ...props.summaryArray,
  ];
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.summaryArray.length - page * rowsPerPage);

  return (
    <>
      <StylesProvider injectFirst>
        <div className="table-position">
          <TableContainer component={Paper}>
            <div className="header">
              <Typography className="table-title">Covid-19 Data</Typography>
              <div className="search-container">
                <SearchIcon className="search-icon" />
                <TextField
                  onChange={inputSearchHandler}
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                />
              </div>
            </div>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="header-row">
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
                  <TableCell>{''}</TableCell>
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
                {props.summaryArray
                  .filter((country) => country.Country.includes(filter))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((countrySummary, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + page * rowsPerPage + 1}</TableCell>
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
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component={Paper}
              count={combinedFetchedDataInArray.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </div>
      </StylesProvider>
    </>
  );
};

export default StatsTable;
