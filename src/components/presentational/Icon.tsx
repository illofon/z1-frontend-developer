import { ICON_NAMES } from "../../redux_logic/constants";
import approved from "../../static/icons/approved.svg";
import warning from "../../static/icons/warning.svg";
import rejected from "../../static/icons/rejected.svg";
import accepted from "../../static/icons/accepted.svg";


type IconProps = {
    iconName: string,
}

const returnIconByName = (iconName:string) => {
    switch(iconName){
        case ICON_NAMES.APPROVED:
            return approved;
        case ICON_NAMES.WARNING:
            return warning;
        case ICON_NAMES.REJECTED:
            return rejected;
        case ICON_NAMES.ACCEPTED:
            return accepted;
        default:
            return warning;
    }

}

// I thought of adding size if i wanted to reuse it, but well.

export const Icon = ({iconName}:IconProps):JSX.Element => {
    return <img src={returnIconByName(iconName)} />
}

