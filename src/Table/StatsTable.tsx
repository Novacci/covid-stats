import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core';

const StatsTable = () => {
  const CountriesArray = ['Poland', 'France', 'Italy', 'Spain'];

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Country</TableCell>
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
            {CountriesArray.map((country) => (
              <TableRow key={Math.random()}>
                <TableCell>{country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StatsTable;
