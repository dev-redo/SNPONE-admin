import * as React from "react";
import { Box, IconButton, Toolbar, AppBar, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../static/images/e.png";
import { useRecoilState } from "recoil";
import { activeStatus } from "../../store/global";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [active, setActive] = useRecoilState(activeStatus);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const md = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        flexGrow: 1,
        zIndex: 10,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          {md && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Box sx={{ position: "relative" }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                {open ? (
                  <Box>
                    관리자 페이지로 가시겠어요?
                    <StyledLink to="/dash">
                      <strong> __CLICK!</strong>
                    </StyledLink>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          )}
          {!md && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: "relative" }}
              onClick={() => setActive((state) => !state)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <div style={{ marginLeft: "auto" }}>
            <Link to="/">
              <img style={{ width: "180px" }} src={Logo} alt="" />
            </Link>
          </div>

          <div></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileHeader;

const StyledLink = styled(Link)`
  color: #fff;
`;
