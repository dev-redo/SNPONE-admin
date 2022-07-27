import React from "react";
import { Box, Toolbar, styled, Badge } from "@mui/material";
import Styled from "styled-components";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../../static/images/d.png";
import ButtonAnimation from "../../elements/Animations/ButtonAnimation";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openStatus } from "../../store/global";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useRecoilState(openStatus);
  const moveToAbout = () => {
    setTimeout(() => {
      navigate("/about", { replace: true });
    }, 810);
  };
  return (
    <Box>
      <MuiAppBar>
        <StyledToolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StyledLink to="/">
              <img style={{ width: "180px" }} src={Logo} alt="" />
            </StyledLink>
          </Box>
          <Icons>
            {/* <StyledLink to="/sign" onClick={() => setOpen(true)}>
              <span>지원하기</span>
            </StyledLink> */}
            <div onClick={moveToAbout}>
              <ButtonAnimation animation={["loopAnimation", "doneAnimation"]} />
            </div>
            <Badge>
              <SettingsIcon fontSize="large" />
            </Badge>
          </Icons>
        </StyledToolbar>
      </MuiAppBar>
    </Box>
  );
};

export default Header;

const StyledLink = Styled(Link)`
color: #fff;
text-decoration-line: none;
font-family: "Gfont_regular";
@media (max-width: 600px) {
  & > span {
    display: none;
}
}

`;

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});
