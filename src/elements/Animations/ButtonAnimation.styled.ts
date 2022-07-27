import Lottie from "react-lottie";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  width: 4rem;
  height: 3rem;
  cursor: pointer;
`;

export const LottieWrapper = styled(Lottie)`
  width: 100%;
  height: 100%;
`;
