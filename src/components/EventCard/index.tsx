import React from "react";
import { ActiveFilter, EventCardWrapper, TextWrapper } from "./styles";

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
   * Defines a dark mask if is inactive
   */
  isActive?: boolean;
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
  isActive = true,
  hasShadow,
  textColor,
  text
}) => {
  return (
    <EventCardWrapper {...{ primaryGradientColor, hasShadow, secondaryGradientColor, textColor }}>
      <ActiveFilter isActive={isActive}>
        <TextWrapper>
          {text}
        </TextWrapper>
      </ActiveFilter>
    </EventCardWrapper>
  );
};

export default EventCard;
