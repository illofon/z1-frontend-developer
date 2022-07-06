import { createGlobalStyle } from "styled-components";
import Roboto from "../fonts/roboto-v30-latin-regular.woff"
import RobotoBold from "../fonts/roboto-v30-latin-900.woff"

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('woff');
    }

    @font-face {
        font-family: 'Roboto Bold';
        src: url(${RobotoBold}) format('woff');
    }
    html {
        --color-primary: #2F0079;
        --light-gray: rgba(47,0,121,0.1);
        --color-success: #69CC8B;
        --color-error: #C00000;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 24px;
        margin: 0;
    }
`
