import React from "react";
import { ButtonWrapper } from "./styles";

type Props = {
  /**
   * Defines the button text
   */
  label: string;
  /**
   * Defines the text background color
   */
  contentBackgroundColor?: string;
  /**
   * Defines the text background color when hover
   */
  contentBackgroundColorHover?: string;
  /**
   * Defines the bottom bar color
   */
  bottomBarColor?: string;
  /**
   * Defines the bottom bar color when hover
   */
  bottomBarColorHover?: string;
  /**
   * Defines a shadow if true
   */
  hasShadow?: boolean;
  /**
   * Defines the text's color
   */
  textColor?: string;
};

const Button: React.FC<Props> = ({
  label,
  contentBackgroundColor,
  contentBackgroundColorHover,
  bottomBarColor,
  bottomBarColorHover,
  textColor,
}) => {
  return (
    <ButtonWrapper
      contentBackgroundColor={contentBackgroundColor}
      contentBackgroundColorHover={contentBackgroundColorHover}
      bottomBarColor={bottomBarColor}
      bottomBarColorHover={bottomBarColorHover}
      textColor={textColor}
    >
        {label}
    </ButtonWrapper>
  );
};

export default Button;
