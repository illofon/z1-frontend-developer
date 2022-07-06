import styled from "styled-components"


export const PillText = (props:any):JSX.Element => {
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>
}

export const StyledParagraph = styled.b`
    color: ${(p: any) => p.primary ? 'black' : 'white'};
    display: ${(p: any) => p.icon ? 'flex' : 'block'}; 
    align-items: ${(p: any) => p.icon ? 'center' : 'none'}; 
    justify-content: ${(p: any) => p.icon ? 'center' : 'none'}; 
    font-size: 12px;
    color: white;
    height: 12px;
    margin-right: 8px;
    letter-spacing: 0.75px;
    line-height: 12px;
`