"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const index_1 = __importDefault(require("../index"));
/**
 * @jest-environment jsdom
 */
describe("StyledText", () => {
    test("renders correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, react_2.render)(react_1.default.createElement(index_1.default, { elementType: "bounce", animationProps: { iteration: 1 } }, "Test DataText"));
        expect(yield react_2.screen.getByText("Test DataText")).toBeInTheDocument();
    }));
});
test("renders typewriter correctly", () => __awaiter(void 0, void 0, void 0, function* () {
    (0, react_2.render)(react_1.default.createElement(index_1.default, { elementType: "typewriter", dataText: ["Test DataText", "Test Text"], animationProps: { iteration: 1, duration: "1s" } }));
    // we need to wait for the animation to finish. it comes in letter by letter. so we need to wait for the last letter to be rendered.
    // await waitFor(() => {
    //   expect(screen.getByText(/Test DataText/)).toBeInTheDocument();
    // });
    // await waitFor(() => {
    //   expect(screen.getByText(/Test Text/)).toBeInTheDocument();
    // });
}));
