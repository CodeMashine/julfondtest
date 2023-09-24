import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Grid } from '@mui/material';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';

const Main = (): ReactJSXElement => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={8}>
        <Content />
      </Grid>
    </Grid>
  );
};

export default Main;
