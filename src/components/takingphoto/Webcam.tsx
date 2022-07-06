import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import { fetchVerificationRequest, saveApprovedPhoto } from "../../redux_logic/actions/Verification/Verification";
import { useDispatch } from "react-redux";
import loader from "../../static/images/metal_loader.gif" 
import { useSelector } from "react-redux";
import { RootState } from "../../redux_logic/reducers/rootReducer"
import { StatusText } from "./StatusText"
import { POSSIBLE_OUTCOMES, STEPS } from "../../redux_logic/constants";
import { changeStep, setIntervalId } from "../../redux_logic/actions/Process/Process";

export const WebcamCapture = (): JSX.Element => {

    const webcamRef: any = useRef<Webcam>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const videoConstraints: MediaTrackConstraints = {
      width: 290,
      height: 180
    }
    const { outcome, takenPhoto } = useSelector(
      (state: RootState) => state.verification
    );

    const { intervalId } = useSelector(
      (state: RootState) => state.process
    );

    const handleUserMedia = () => {
      setLoading(false);
    }

    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(fetchVerificationRequest());
      dispatch(saveApprovedPhoto(imageSrc));
    }, [webcamRef, dispatch]);
    
    useEffect(()=>{
      const interval: any = setInterval( () => {
         if(!loading){
          capture();
         }
         // Avoid unnecessary calls.
      }, 2000);
      dispatch(setIntervalId(interval))
    return () => {
      // Kill interval when the component unrenders
        clearInterval(interval);
      }
    }, [capture, loading, outcome, dispatch]);

    // Second useEffect to watch over a outcome change and then, after one second, changeStep. I thought the  2 seconds was a good way to
    // give time to the user for knowing what is happening. Often automatic things confuse a lot.
    useEffect( () => {
      if(outcome === POSSIBLE_OUTCOMES.VALID){
        clearInterval(intervalId)
        setTimeout( () => {
          dispatch(changeStep(STEPS.PRISTINE))
        }, 2000)
      }
    }, [outcome, dispatch, intervalId])

    // First useEffect has an effect on api calls.

    // Same disclaimer as before. I could not get styled components
    // to work with redux or state variables because i do not now how
    // to implement it a good way. Thought this could work. Not proud
    // of it to be honest
    return (
      <>
        { loading && <img src={loader} alt="Loader display" />}  
        <Webcam 
          ref={webcamRef} 
          audio={false} 
          style={{
            display: loading ? "none" : "block",
            border:  !takenPhoto ? "none" 
                      :
                        (outcome === POSSIBLE_OUTCOMES.NON_VALID) ?
                        ("2px solid var(--color-error)") 
                      :
                        ("2px solid var(--color-success)"),
            borderRadius: "12px"
          }}
          onUserMedia={handleUserMedia}
          videoConstraints={videoConstraints}
          />
        { !loading && (!takenPhoto || outcome===POSSIBLE_OUTCOMES.VALID) &&<StatusText outcome={outcome} />}
      </>
    );
};
  

