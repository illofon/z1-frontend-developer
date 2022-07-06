import styled from "styled-components"
import { HeaderParagraph } from "../presentational/typography/HeaderParagraph"

export const Header = (props:any):JSX.Element => {
    return <StyledHeader {...props}>
        <HeaderParagraph primary>BankClient</HeaderParagraph>
        {props.children}
    </StyledHeader>
}

const StyledHeader = styled.header`
    border-bottom: 1px solid var(--light-gray);
    padding: 0px 20px;
`