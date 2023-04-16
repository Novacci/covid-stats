import './StatsTable.scss';
import {
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  TableSortLabel,
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
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState('');
  const [orderBy, setOrderBy] = useState<keyof CountrySummary>('Country');
  const [order, setOrder] = useState<any>('asc');

  const handleSort = (property: keyof CountrySummary) => (event: any) => {
    console.log(property);
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const arraySort = (a: CountrySummary, b: CountrySummary) => {
    if (order === 'asc') {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  };
  const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
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
              <div className="search-container">
                <SearchIcon className="search-icon" />
                <TextField
                  InputLabelProps={{
                    style: {
                      color: 'var(--font-color)',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'var(--font-color)',
                    },
                  }}
                  onChange={inputSearchHandler}
                  value={filter}
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                />
              </div>
            </div>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow className="header-row">
                  <TableCell>#</TableCell>
                  <TableCell>Country/Global</TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'TotalConfirmed'}
                      direction={orderBy === 'TotalConfirmed' ? order : 'asc'}
                      onClick={handleSort('TotalConfirmed')}
                    >
                      Total Cases
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'NewConfirmed'}
                      direction={orderBy === 'NewConfirmed' ? order : 'asc'}
                      onClick={handleSort('NewConfirmed')}
                    >
                      New Cases
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'TotalDeaths'}
                      direction={orderBy === 'TotalDeaths' ? order : 'asc'}
                      onClick={handleSort('TotalDeaths')}
                    >
                      Total Deaths
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'NewDeaths'}
                      direction={orderBy === 'NewDeaths' ? order : 'asc'}
                      onClick={handleSort('NewDeaths')}
                    >
                      New Deaths
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'TotalRecovered'}
                      direction={orderBy === 'TotalRecovered' ? order : 'asc'}
                      onClick={handleSort('TotalRecovered')}
                    >
                      Total Recovered
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'NewRecovered'}
                      direction={orderBy === 'NewRecovered' ? order : 'asc'}
                      onClick={handleSort('NewRecovered')}
                    >
                      New Recovered
                    </TableSortLabel>
                  </TableCell>
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
                  .sort(arraySort)
                  .filter((country) => country.Country.includes(filter))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((countrySummary, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + page * rowsPerPage + 1}</TableCell>
                      <TableCell>
                        {countrySummary.Country.toLocaleString()}
                      </TableCell>
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
