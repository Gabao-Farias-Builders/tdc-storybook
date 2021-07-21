import React from "react";
import { PaperWrapper } from "./styles";

type Props = {
  /**
   * Defines Paper's background color
   */
  backgroundColor?: string;
  /**
   * Defines Paper's text color
   */
  textColor?: string;
  /**
   * Defines a shadow if true
   */
  hasShadow?: boolean;
  /**
   * Defines the text to be rendered inside Paper
   */
  text: string;
};

const Paper: React.FC<Props> = ({
  backgroundColor,
  textColor,
  hasShadow,
  text
}) => {
  return (
    <PaperWrapper {...{ textColor, hasShadow, backgroundColorProp: backgroundColor}}>
      {text}
    </PaperWrapper>
  );
};

export default Paper;
