import {getMuiTheme} from 'material-ui/styles';
import {blue500, blue700, blue400, amber500, amber700, amber400} from 'material-ui/styles/colors';

export default getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: blue400,
    accent1Color: amber500,
    accent2Color: amber700,
    accent3Color: amber400
  },
  isRtl: true
});