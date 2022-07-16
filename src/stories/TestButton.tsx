import { css } from "@emotion/react";

export const TestButton = () => {
  const buttonStyle = css`
    color: #fff;
    background-color: blue;
    border-radius: 3em;
  `;

  return <button css={buttonStyle}>Test</button>;
};
