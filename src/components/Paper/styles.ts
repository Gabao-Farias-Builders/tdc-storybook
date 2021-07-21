import styled from  'styled-components';

type PaperWrapperProps = {
  backgroundColorProp?: string;
  textColor?: string;
  hasShadow?: boolean;
};

export const PaperWrapper = styled.div<PaperWrapperProps>`
  background-color: ${({ backgroundColorProp }) => backgroundColorProp || "#203"};
  color: ${({ textColor }) => textColor || "#f6f"};

  border-radius: 10px;

  padding: 20px;

  -webkit-box-shadow: ${({ hasShadow }) => hasShadow
    ? "4px 4px 8px 0px rgba(0,0,0,0.3)"
    : "none"
  };

  box-shadow: ${({ hasShadow }) => hasShadow
    ? "4px 4px 8px 0px rgba(0,0,0,0.3)"
    : "none"
  };
`;
