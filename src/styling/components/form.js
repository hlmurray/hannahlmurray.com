import styled from 'styled-components'
import colors from './colors'

export const Form = styled.form`
    margin-top: 20px;

    label {
        display: block;
    }

    input,
    textarea {
        display: inline-block;
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        font-size: 16px;
        font-family: 'Playfair Display', serif;
        background-color: ${colors.grayLight};
        border: 0;
        outline: none;
    }

    input[type="submit"] {
        background-color: ${colors.rust};
        color: ${colors.white};
    }
`
