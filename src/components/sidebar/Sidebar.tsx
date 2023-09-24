import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';
import Search from './components/Search';
import ResultList from './components/ResultList';

const Sidebar = (): ReactJSXElement => {
  return (
    <Box>
      <Search />
      <ResultList />
    </Box>
  );
};

export default Sidebar;
