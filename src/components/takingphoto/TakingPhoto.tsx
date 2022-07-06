import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { changeStep, setIntervalId } from "../../redux_logic/actions/Process/Process"
import { STEPS } from "../../redux_logic/constants"
import takingPhotoBg from "../../static/images/taking_photo_bg.png"
import { Button } from "../presentational/Button"
import { HeaderParagraph } from "../presentational/typography/HeaderParagraph"
import { Paragraph } from "../presentational/typography/Paragraph"
import { WebcamCapture } from "./Webcam"
import { RootState } from "../../redux_logic/reducers/rootReducer"

export const TakingPhotoSection = (props:any):JSX.Element => {
    const dispatch = useDispatch();

    const { intervalId } = useSelector(
        (state: RootState) => state.process
      );

    const handleCancelClick = () => {
        // If we have an interval set for cam reading we want to kill it after clicking.
        // Since setInterval gives an id i considered a good idea to save it
        // whenever i needed it: in this case, killing it.
        if(intervalId){
            clearInterval(intervalId);
            dispatch(setIntervalId(0))  
        }
        dispatch(changeStep(STEPS.PRISTINE))
    }
    return <StyledSection {...props}>
            <HeaderParagraph>Take picture</HeaderParagraph>
            <Paragraph>Fit your ID card inside the frame. <br/> The picture will be taken automatically.</Paragraph>
            <WebcamCapture />
            <SecondaryButton onClick={handleCancelClick}>
                Cancel
            </SecondaryButton>
        </StyledSection>

}

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 100px;
    align-items: center;
    z-index: 2;
    text-align: center;
    margin: 0 auto;
    &:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        display: block;
        background: linear-gradient(to top, #141c26bf, #141c26bf), url(${takingPhotoBg}) no-repeat top center;
        background-size: cover;
        width: 100%;
        height: 100vh;
        filter: blur(4px);
      }
`

const SecondaryButton = styled(Button)`
    background-color: transparent;
    margin-top: 100px;
`