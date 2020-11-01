import { createMuiTheme } from '@material-ui/core/styles';
import "fontsource-crimson-text";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Crimson Text"
    },
    palette: {
        primary: {
            main: "#7a7a7a"
        },
        secondary: {
            main: "#FFFFFF"
        },
        text: {
            secondary: "#333333"
        }
    },
    background: {
        default: "#fff"
    }

})

export default theme;