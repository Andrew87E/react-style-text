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
describe("StyledText", () => {
    test("renders correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        (0, react_2.render)(react_1.default.createElement(index_1.StyledText, { animationProps: { animationname: "bounce" } }, "Test DataText"));
        expect(yield react_2.screen.getByText("Test DataText")).toBeInTheDocument();
    }));
});
