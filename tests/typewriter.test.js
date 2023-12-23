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
const index_1 = require("../index");
/**
 * @jest-environment jsdom
 */
jest.useFakeTimers();
describe("TypewriterComponent", () => {
    it("displays text one letter at a time", () => __awaiter(void 0, void 0, void 0, function* () {
        const textArray = ["Hello", "World", "Example"];
        (0, react_2.render)(react_1.default.createElement(index_1.Typewriter, { datatext: textArray }));
        // Initially, there should be no text
        textArray.forEach((text) => {
            expect(react_2.screen.queryByText(text)).toBeNull();
        });
        for (const word of textArray) {
            for (let i = 1; i <= word.length; i++) {
                // Advance timers for each letter
                (0, react_2.act)(() => {
                    jest.advanceTimersByTime(500);
                });
                // Wait for the text to update
                const expectedText = word.substring(0, i);
                yield (0, react_2.waitFor)(() => {
                    expect(react_2.screen.getByText(expectedText, { exact: false })).toBeInTheDocument();
                });
            }
        }
    }));
    //   it("eventually displays the full text from the array", async () => {
    //     const textArray = ["Hello", "World"];
    //     render(<Typewriter dataText={textArray} />);
    //     let cumulativeTime = 0;
    //     const typingInterval = 500; // adjust this to match the typing speed of your component
    //     const initialDelay = 500; // adjust if there's an initial delay before typing starts
    //     for (const word of textArray) {
    //       // Advance timers for the whole word, plus any initial delay for the first word
    //       const advanceTime =
    //         word.length * typingInterval +
    //         (cumulativeTime === 0 ? initialDelay : 0);
    //       act(() => {
    //         jest.advanceTimersByTime(advanceTime);
    //       });
    //       cumulativeTime += advanceTime;
    //       // Check if the whole word is displayed
    //       await waitFor(() => {
    //         expect(screen.getByText(word)).toBeInTheDocument();
    //       });
    //     }
    //   });
});
