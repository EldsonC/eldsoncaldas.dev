import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        outline: none;
        border: none;
        text-decoration: none;
        list-style: none;
    }

    :root {
        --primary-color: #815FEA;
        --secundary-color: #FFFEFF;
        --third-color: #F9F9F9;

        --yellow-color: #FFAA29;

        --black-600: #393939;
        --black-500: #B5B5B5;
        --black-400: #8F8F8F;
    }

    body, html {
        font-family: "Poppins", sans-serif;
        background-color: var(--secundary-color);
    }
`;