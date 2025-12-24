import AboutAttribute from "./AboutAttribute";
import AboutElement from "./AboutElement";
import FormElement from "./FormElement";
import Heading from "./Heading";
import HtmlClass from "./HtmlClass";
import HtmlColor from "./HtmlColor";
import HtmlComment from "./HtmlComment";
import HtmlCSS from "./HtmlCSS";
import HtmlEmojis from "./HtmlEmojis";
import HtmlId from "./HtmlId";
import HtmlIntroduction from "./HtmlIntroduction";
import HtmlList from "./HtmlList";
import HtmlQuotation from "./HtmlQuotation";
import HtmlStyle from "./HtmlStyle";
import HtmlSymbol from "./HtmlSymbols";
import HtmlTable from "./HtmlTable";
import Paragraph from "./Paragramph";


let  HtmlSyllabus = [
    {
        name:'HTML Introduction',
        content:<HtmlIntroduction></HtmlIntroduction>
    },
    {
        name:'HTML Elements',
        content:<AboutElement></AboutElement>
    },
    {
        name:'HTML Attributes',
        content:<AboutAttribute></AboutAttribute>
    },
    {
        name:'HTML Form Element',
        content:<FormElement></FormElement>
    },
    {
        name:'HTML Headings',
        content:<Heading></Heading>
    },
    {
        name:'HTML Paragraph',
        content:<Paragraph></Paragraph>
    },
    {
        name:'HTML Style',
        content:<HtmlStyle></HtmlStyle>
    },
    {
        name:'HTML Quotation',
        content:<HtmlQuotation></HtmlQuotation>
    },
    {
        name:'HTML Comment',
        content:<HtmlComment></HtmlComment>
    },
    {
        name:'HTML Color',
        content:<HtmlColor></HtmlColor>
    },
    {
        name:'HTML CSS',
        content:<HtmlCSS></HtmlCSS>
    },
    {
        name:'HTML Table',
        content:<HtmlTable></HtmlTable>
    },
    {
        name:'HTML List',
        content:<HtmlList></HtmlList>
    },
    {
        name:'HTML Class',
        content:<HtmlClass></HtmlClass>
    },
    {
        name:'HTML ID',
        content:<HtmlId></HtmlId>
    },
    {
        name:'HTML Symbols',
        content:<HtmlSymbol></HtmlSymbol>
    },
    {
        name:'HTML Emojis',
        content:<HtmlEmojis></HtmlEmojis>
    }
    
]

export default HtmlSyllabus;