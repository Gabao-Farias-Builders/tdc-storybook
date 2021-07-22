import React from "react";
import { EventCardWrapper } from "./styles";

type Props = {
  /**
   * Defines primary color from gradient
   */
  primaryGradientColor?: string;
  /**
   * Defines secundary color from gradient
   */
  secondaryGradientColor?: string;
  /**
   * Defines a shadow if true
   */
  hasShadow?: boolean;
  /**
   * Defines the text's color
   */
  textColor?: string;
  /**
   * Defines the text to be rendered inside Paper
   */
  text: string;
};

const EventCard: React.FC<Props> = ({
  primaryGradientColor,
  secondaryGradientColor,
  hasShadow,
  textColor,
  text
}) => {
  return (
    <EventCardWrapper {...{ primaryGradientColor, hasShadow, secondaryGradientColor, textColor }}>
      {text}
    </EventCardWrapper>
  );
};

export default EventCard;
