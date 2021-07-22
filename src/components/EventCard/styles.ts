import styled from  'styled-components';

type EventCardWrapperProps = {
  primaryGradientColor?: string;
  secondaryGradientColor?: string;
  textColor?: string;
  hasShadow?: boolean;
};

const defaultWidth = "215.5px";

export const EventCardWrapper = styled.div<EventCardWrapperProps>`
  ${({ primaryGradientColor, secondaryGradientColor }) => (
    `background: linear-gradient(180deg, ${primaryGradientColor || "#009945"} 0%, ${secondaryGradientColor || "#fff"} 40%, ${secondaryGradientColor || "#fff"} 60%,  ${primaryGradientColor || "#009945"} 100%);`
  )}
  color: ${({ textColor }) => textColor || "#f6f"};

  border-radius: 24px;

  padding: 20px;
  width: ${defaultWidth};
  text-overflow: ellipsis;
  -webkit-box-shadow: ${({ hasShadow }) => hasShadow
    ? "4px 4px 8px 0px rgba(0,0,0,0.3)"
    : "none"
  };

  box-shadow: ${({ hasShadow }) => hasShadow
    ? "4px 4px 8px 0px rgba(0,0,0,0.3)"
    : "none"
  };

  @media(max-width: 768px) {
    width: ${defaultWidth};
    height: ${defaultWidth};
    ${({ primaryGradientColor, secondaryGradientColor }) => (
      `background: linear-gradient(180deg, ${primaryGradientColor || "#009945"} 0%, ${secondaryGradientColor || "#fff"} 50%, ${primaryGradientColor || "#009945"} 100%);`
    )}
  }
`;
