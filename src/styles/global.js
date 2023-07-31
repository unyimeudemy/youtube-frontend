import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

const getWidthString = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return `width: ${width}%`;
};

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
        float: left;
        ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

        @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
        }

        @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
        }

        @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
        }

    }

  /* used only on a particular component
  float: left;
  width: 100%; */

  /* :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    } */


`;

export default Global;
