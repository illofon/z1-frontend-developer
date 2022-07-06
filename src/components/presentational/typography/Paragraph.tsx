import styled from "styled-components"


export const Paragraph = (props:any):JSX.Element => {
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>
}

export const StyledParagraph = styled.p`
    color: ${(p: any) => p.primary ? 'black' : 'white'};
    margin-top: 8px;
    display: ${(p: any) => p.icon ? 'flex' : 'block'}; 
    align-items: ${(p: any) => p.icon ? 'center' : 'none'}; 
`