import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { changeStep } from "../../redux_logic/actions/Process/Process"
import { ICON_NAMES, POSSIBLE_OUTCOMES, STEPS } from "../../redux_logic/constants"
import idMockup from "../../static/images/identification_card.svg"
import { Button } from "../presentational/Button"
import { RootState } from "../../redux_logic/reducers/rootReducer"
import { Pill } from "../presentational/Pill"
import { Icon } from "../presentational/Icon"

export const IDWireframe = (props:any):JSX.Element => {
    const dispatch = useDispatch();

    const { takenPhoto, outcome } = useSelector(
        (state: RootState) => state.verification
      );

    const handleTakePictureClick = () =>{
        dispatch(changeStep(STEPS.TAKING_PHOTO))
    }

    return <IDWireframeWrapper {...props} takenPhoto={takenPhoto} valid={outcome===POSSIBLE_OUTCOMES.VALID}>
        { outcome === POSSIBLE_OUTCOMES.NON_VALID &&
            <IDWireframeButton onClick={handleTakePictureClick}>
                {takenPhoto? 
                    "RETAKE PICTURE"
                :
                    "TAKE PICTURE"
                }
            </IDWireframeButton>
        }
        { takenPhoto && <Pill icon inCard success={outcome===POSSIBLE_OUTCOMES.VALID}>
            { outcome===POSSIBLE_OUTCOMES.VALID ? 
                <>
                    <Icon iconName={ICON_NAMES.ACCEPTED}/>
                    ACCEPTED
                </>
                :
                <>
                    <Icon iconName={ICON_NAMES.REJECTED}/>
                    REJECTED
               </>  
            }
            </Pill>}
    </IDWireframeWrapper>
}

export const IDWireframeWrapper = styled.div`
    height: 160px;
    width: 260px;
    margin-top: 24px;
    background-image: url(${(props:any) => props.takenPhoto ? props.takenPhoto : idMockup});
    background-repeat: no-repeat;
    background-position: center;
    border: ${(props:any) => !props.takenPhoto ? ("none") : props.valid ? ("2px solid var(--color-success)") : ("2px solid var(--color-error)")};
    display: flex;
    border-radius: 12px;
    position: relative;
    background-color: #FFFFFF;
    box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`

const IDWireframeButton = styled(Button)`
    margin: auto;
    justify-self: center;
`