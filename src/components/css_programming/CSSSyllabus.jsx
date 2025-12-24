import CSSComments from "./CSSComments";
import CSSDisplay from "./CSSDisplay";
import CSSError from "./CSSError";
import CSSHeightWeight from "./CSSHeightWeight";
import CSSIntroduction from "./CSSIntroduction";
import CSSMargin from "./CSSMargin";
import CSSPadding from "./CSSPadding";
import CSSSelectors from "./CSSSelectors";
import CSSSyntax from "./CSSSyntax";
import CSSText from "./CSSText";
import PseudoClasses from "./PseudoClasses";

let CSSSyllabus = [
    {
        name:'CSS Introduction',
        content:<CSSIntroduction></CSSIntroduction>
    },
    {
        name:'CSS Syntax',
        content:<CSSSyntax></CSSSyntax>
    },
    {
        name:'CSS Selectors',
        content:<CSSSelectors></CSSSelectors>
    },
    {
        name:'CSS Comments',
        content:<CSSComments></CSSComments>
    },
    {
        name:'CSS Error',
        content:<CSSError></CSSError>
    },
    {
        name:'CSS Margin',
        content:<CSSMargin></CSSMargin>
    },
    {
        name:'CSS Padding',
        content:<CSSPadding></CSSPadding>
    },
    {
        name:'CSS Height & Weight',
        content:<CSSHeightWeight></CSSHeightWeight>
    },
    {
        name:'CSS Text',
        content:<CSSText></CSSText>
    },
    {
        name:'CSS Pseudo Classes',
        content:<PseudoClasses></PseudoClasses>
    },
    {
        name:'CSS Display',
        content:<CSSDisplay></CSSDisplay>
    }

]
export default CSSSyllabus;