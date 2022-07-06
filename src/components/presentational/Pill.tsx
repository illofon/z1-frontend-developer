import styled from "styled-components"
import { PillText } from "./typography/PillText"


export const Pill = (props:any):JSX.Element => {
    return <StyledDiv {...props}>
        <PillText icon={props.icon}>
            {props.children}
        </PillText>
    </StyledDiv>
}

export const StyledDiv = styled.div`
    background-color: ${(props: any) => props.success ? 'var(--color-success)' : 'var(--color-error)'};
    height: 30px;
    position: ${(props: any) => props.inCard ? 'absolute' : 'static'};
    border-radius: 4px;
    bottom: -16px;
    right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`