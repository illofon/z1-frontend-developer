import { useSelector } from "react-redux";
import { STEPS } from "../redux_logic/constants";
import { RootState } from "../redux_logic/reducers/rootReducer";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Header } from "./header/Header";
import { IdScanner } from "./idscanner/IdScanner";
import { TakingPhotoSection } from "./takingphoto/TakingPhoto";

export const Main = (): JSX.Element => {
  const { step } = useSelector(
    (state: RootState) => state.process
  );
  return (
    <main>
      <GlobalStyles />
      { step === STEPS.PRISTINE &&
        <>
          <Header />
          <IdScanner />
        </>
      }
      { step === STEPS.TAKING_PHOTO &&
        <TakingPhotoSection />
      }
    </main>
  );
};