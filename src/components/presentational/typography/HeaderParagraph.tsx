import styled from "styled-components"


export const HeaderParagraph = (props:any):JSX.Element => {
    return <StyledHeaderParagraph {...props}>{props.children}</StyledHeaderParagraph>
}

// If not primary, pass to secondary. I really dont know if there's a better way to do this.
// I often tend to avoid double ternaries but i read it is a common way to do it. Cross fingers.

export const StyledHeaderParagraph = styled.h1`
    font-style: ${(p: any) => p.primary ? 'italic' : 'normal' };
    font-family: 'Roboto Bold' sans-serif;
    font-size: 21px; 
    margin-top: ${(p: any) => p.secondary? "32px" : "0.67em" };
    margin-bottom: ${(p: any) => p.secondary? "8px" : "0.67em" };
    color: ${(p: any) => p.primary ? 'var(--color-primary)' : 
                         p.secondary ? 'black': 'white' 
    };
`