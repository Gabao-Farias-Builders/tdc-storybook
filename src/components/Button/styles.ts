import styled from  'styled-components';

type ButtonWrapperProps = {
  contentBackgroundColor?: string;
  contentBackgroundColorHover?: string;
  bottomBarColor?: string;
  bottomBarColorHover?: string;
  textColor?: string;
  hasShadow?: boolean;
};

const defaultBorderRadius = "4px";
const defaultHeight = "42px";

const defaultTextColor = "#fff";
const defaultContentBackgroundColor = "#e35100";
const defaultBottomBarColor = "#b64100";

const defaultContentBackgroundColorHover = defaultBottomBarColor;
const defaultBottomBarColorHover = defaultContentBackgroundColor;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;

  justify-content: center;
  align-items: center;

  height: ${defaultHeight};
  border-radius: ${defaultBorderRadius};
  width: 100%;

  color: ${({ textColor = defaultTextColor }) => textColor};

  background-color: ${({ contentBackgroundColor = defaultContentBackgroundColor }) => contentBackgroundColor};
  border-bottom: 4px solid ${({bottomBarColor = defaultBottomBarColor}) => bottomBarColor};

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ contentBackgroundColorHover = defaultContentBackgroundColorHover }) => contentBackgroundColorHover};
    border-bottom-color: ${({bottomBarColorHover = defaultBottomBarColorHover}) => bottomBarColorHover};
  }
`;
