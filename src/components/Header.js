import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../images/Logo.svg";

const pages = [
  {
    title: "Користувач",
    placeholder: "Ініціалізація нового користувача",
  },
  {
    title: "OBD",
    placeholder: "Отримання real-time інформації з OBD",
  },
];
const settings = ["Вихід"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.black.light,
        }}
      >
        <Toolbar disableGutters>
          <Box // CONTAINER FOR PC
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              gap: "12px",
            }}
          >
            <Avatar
              src={Logo}
              alt="logo"
              sx={{
                display: {
                  md: "flex",
                  xs: "none",
                },
                borderRadius: 0,
                height: "100%",
                width: "100px",
              }}
            ></Avatar>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Tooltip title={page.placeholder} key={"Tooltip-" + page.title}>
                  <Button
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.title}
                  </Button>
                </Tooltip>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: { md: "flex", xs: "none" } }}>
              <Tooltip title="Відкрити налаштування">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Manager"
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.primary.blue.dark,
                    }}
                  >
                    M1
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          <Box // CONTAINER FOR MOBILE
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiPaper-root": {
                    backgroundColor: (theme) =>
                      theme.palette.primary.black.light,
                  },
                  "& ul": {
                    backgroundColor: (theme) =>
                      theme.palette.primary.black.light,
                    "& :hover": {
                      backgroundColor: "#3a3a3f",
                    },
                  },
                  "& li": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {pages.map((page) => (
                  <Tooltip
                    title={page.placeholder}
                    key={"Tooltip-" + page.title}
                  >
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  </Tooltip>
                ))}
              </Menu>
            </Box>

            <Avatar
              src={Logo}
              alt="logo"
              sx={{
                display: {
                  md: "none",
                  xs: "flex",
                },
                borderRadius: 0,
                height: "100%",
                width: "100px",
              }}
            ></Avatar>
            <Box sx={{ flexGrow: 0, display: { md: "none", xs: "flex" } }}>
              <Tooltip title="Відкрити налаштування">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: "45px",
                  "& .MuiPaper-root": {
                    backgroundColor: (theme) =>
                      theme.palette.primary.black.light,
                  },
                  "& ul": {
                    backgroundColor: (theme) =>
                      theme.palette.primary.black.light,
                  },
                  "& li": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
