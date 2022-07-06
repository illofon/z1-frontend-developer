import styled from "styled-components"
import { HeaderParagraph } from "../presentational/typography/HeaderParagraph"
import { Paragraph } from "../presentational/typography/Paragraph"
import { IDWireframe } from "./IDWireframe"


export const IdScanner = (props:any):JSX.Element => {
    return <StyledSection {...props}>
        <HeaderParagraph secondary>Scan your ID</HeaderParagraph>
        <Paragraph primary>Take a picture. It may take time to validate your personal information</Paragraph>
        <IDWireframe />
    </StyledSection>
}

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 320px;
    margin: 0 auto;
`