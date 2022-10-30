// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
// utils
import { bgBlur } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

export default function StyledChart() {
  const theme = useTheme();

  const inputGlobalStyles = <GlobalStyles styles={{}} />;

  return inputGlobalStyles;
}
