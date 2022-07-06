import styled from "styled-components"


export const Button = (props:any):JSX.Element => {
    return <StyledButton {...props}>{props.children}</StyledButton>
}

export const StyledButton = styled.button`
    background-color: var(--color-primary);
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 20px;
    line-height: 24px;
    cursor: pointer;
    border-radius: 24px;
`