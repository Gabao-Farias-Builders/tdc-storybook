import styled from  'styled-components';

type ActiveFilterProps = {
  isActive?: boolean;
};

type EventCardWrapperProps = {
  primaryGradientColor?: string;
  secondaryGradientColor?: string;
  textColor?: string;
  hasShadow?: boolean;
};

const defaultWidth = "215.5px";
const defaultBorderRadius = "24px";

export const ActiveFilter = styled.div<ActiveFilterProps>`
  display: flex;
  flex: 1;
  z-index: 10;
  border-radius: ${defaultBorderRadius};
  background-color: ${({ isActive }) => isActive ? "#00000000" : "#00000033" };
`;

export const EventCardWrapper = styled.div<EventCardWrapperProps>`
  ${({ primaryGradientColor, secondaryGradientColor }) => (
    `background: linear-gradient(180deg, ${primaryGradientColor || "#009945"} 0%, ${secondaryGradientColor || "#fff"} 40%, ${secondaryGradientColor || "#fff"} 60%,  ${primaryGradientColor || "#009945"} 100%);`
  )}
  color: ${({ textColor }) => textColor || "#f6f"};

  width: ${defaultWidth};
  border-radius: ${defaultBorderRadius};

  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-box-shadow: ${({ hasShadow }) => hasShadow
    ? "4px 4px 8px 0px rgba(0,0,0,0.3)"
    : "none"
  };

  box-shadow: ${({ hasShadow }) => hasShadow
    ? "4px 4px 8px 0px rgba(0,0,0,0.3)"
    : "none"
  };

  & :hover {
    cursor: pointer;
  }

  @media(max-width: 768px) {
    width: ${defaultWidth};
    height: ${defaultWidth};
    ${({ primaryGradientColor, secondaryGradientColor }) => (
      `background: linear-gradient(0deg, ${primaryGradientColor || "#009945"} 0%, ${secondaryGradientColor || "#fff"} 100%);`
    )}
  }
`;

export const TextWrapper = styled.h3`
  margin: 20px;
`;
