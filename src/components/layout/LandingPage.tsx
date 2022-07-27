import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { openStatus } from "../../store/global";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [open, setOpen] = useRecoilState(openStatus);

  return (
    <>
      <FlexBox>
        <StyledLink to="/sign" className="btn" onClick={() => setOpen(true)}>
          <span className="btn-inr">
            <span className="txt-a">지원하기</span>
            <span className="txt-b">멋진 선택이에요!</span>
          </span>
        </StyledLink>
        <StyledLink to="/dash" className="btn" data-js="btn">
          <span className="btn-inr">
            <span className="txt-a">관리자</span>
            <span className="txt-b">대시보드로 이동</span>
          </span>
        </StyledLink>
      </FlexBox>
    </>
  );
};

export default LandingPage;

const FlexBox = styled.div`
  font-family: "Gfont_bold";
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 25rem;
  gap: 3rem;
  text-align: center;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
  .btn.active {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }
  .btn:focus,
  .btn:hover {
    border: 12px solid #1cc5f7;
    border-radius: 0.3em;
  }
  .txt-a {
    display: inline;
  }
  .txt-b {
    display: none;
  }
  .btn:focus .btn-inr,
  .btn:hover .btn-inr {
    background: #1cc5f7;
    padding: 1em 2em;
    margin: 0;
  }
  .btn:focus .txt-a,
  .btn:hover .txt-a {
    display: none;
  }
  .btn:focus .txt-b,
  .btn:hover .txt-b {
    display: inline;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  border: 6px solid #0f2c6e;
  transition: all 0.1s ease-in-out;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .btn-inr:focus,
  .btn-inr:hover {
    background: #1cc5f7;
    padding: 1em 2em;
    margin: 0;
  }
  & > span {
    cursor: pointer;
    min-width: 260px;
    max-width: 426px;
    display: inline-block;
    color: white;
    font-weight: 100;
    font-size: 2em;
    line-height: 1;
    text-transform: uppercase;
    background: #0f2c6e;
    padding: 1em 2em;
    margin: 6px;
    transition: all 0.4s ease-in-out;
  }
`;
