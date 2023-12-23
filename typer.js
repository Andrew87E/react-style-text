"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const Typer = ({ statictext = "", datatext, cursorcolor, }) => {
    const [text, setText] = (0, react_1.useState)("");
    const [isDeleting, setIsDeleting] = (0, react_1.useState)(false);
    const [loopNum, setLoopNum] = (0, react_1.useState)(0);
    const [typingSpeed, setTypingSpeed] = (0, react_1.useState)(150);
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            handleType();
        }, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting]);
    const handleType = () => {
        const i = loopNum % datatext.length;
        const fullText = datatext[i];
        setText(isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1));
        setTypingSpeed(isDeleting ? 30 : 150);
        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), 500);
        }
        else if (isDeleting && text === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };
    return (react_1.default.createElement("div", null,
        statictext,
        "\u00A0",
        react_1.default.createElement("span", null, text),
        react_1.default.createElement(Cursor, { cursorcolor: cursorcolor })));
};
exports.default = Typer;
const blink = (0, styled_components_1.keyframes) `
  50% {
    border-color: transparent;
  }
`;
const Cursor = styled_components_1.default.span `
  margin-left: 2px;
  border-left: 3px solid ${(props) => props.cursorcolor};
  animation: ${blink} 0.7s steps(1) infinite;
`;
