import { Fragment, PropsWithChildren, useEffect } from "react";

interface WithCssVarsProps extends PropsWithChildren {
  vars: Record<string, string>;
}
const WithCssVars = ({ children, vars }: WithCssVarsProps) => {
  useEffect(() => {
    const styleEl = document.createElement("style");
    const cssVars = Object.entries(vars)
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n");
    styleEl.innerHTML = `:root {${cssVars}}`;
    document.head.appendChild(styleEl);
  }, [vars]);
  return <Fragment>{children}</Fragment>;
};

export default WithCssVars;
