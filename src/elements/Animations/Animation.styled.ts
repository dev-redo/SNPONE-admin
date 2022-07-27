import Lottie from "react-lottie";
import styled from "styled-components";

export const Container = styled.div<{ size?: string }>`
  display: flex;
  position: ${(props) =>
    props.size === "For404Animation" || props.size === "ArrowAnimation"
      ? ""
      : "fixed"};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  object-fit: ${(props) => (props.size === "For404Animation" ? "contain" : "")};
`;

export const LottieWrapper = styled(Lottie)`
  width: 100%;
  height: 100%;
`;
