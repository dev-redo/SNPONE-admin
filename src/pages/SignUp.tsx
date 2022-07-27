import React from "react";
import MobileLayout from "../components/layout/MobileLayout";
import { styled } from "@mui/material";
import SignForm from "../components/signup/SignForm";

const SignUp = () => {
  return (
    <MobileLayout>
      <Title sx={{ mb: 0 }}>
        크라우드 워커에 지원하기 위해
        <br />
        필요한 정보를 입력해 주세요
      </Title>
      <SignForm />
    </MobileLayout>
  );
};

export default SignUp;

const Title = styled("h3")({
  width: "100%",
  height: "4rem",
});
