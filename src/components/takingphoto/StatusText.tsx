import styled from "styled-components"
import { ICON_NAMES, POSSIBLE_OUTCOMES } from "../../redux_logic/constants"
import { Icon } from "../presentational/Icon"
import { Paragraph } from "../presentational/typography/Paragraph"

type StatusTextProps = {
    outcome: string,
}

export const StatusText = ({outcome}:StatusTextProps):JSX.Element => {

    return (
        <>
            {outcome === POSSIBLE_OUTCOMES.VALID &&
                    <Paragraph icon><Icon iconName={ICON_NAMES.APPROVED}/>Picture taken!</Paragraph> 
             }
            {outcome === POSSIBLE_OUTCOMES.NON_VALID && 
                    <Paragraph icon><Icon iconName={ICON_NAMES.WARNING}/>Room lighting is too low</Paragraph> 
            }
        </>
    )

}
