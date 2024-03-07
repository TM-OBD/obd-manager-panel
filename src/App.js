import { Box } from "@mui/material";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserDataForm from "./pages/UserDataForm/UserDataForm";
import { useEffect, useState } from "react";
import backgroundImage from "./images/Background.png";
import styled from "@emotion/styled";

const StyledBackgroundImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
`;

const managerInitial = {
  logined: false,
  login: "",
  pass: "",
};

// Only for testing
const managerLogined = {
  logined: true,
  login: "admin",
  pass: "admin",
};

function App() {
  const [manager, setManager] = useState(managerLogined);

  const navigate = useNavigate();

  useEffect(() => {
    if(!manager.logined) {
      navigate("/login")
      return
    }
    navigate("/form")
    return
  },[manager])

  return (
    <Box // Внешний контейнер
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: (theme) => theme.palette.primary.mainBg,
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <StyledBackgroundImage
          src={backgroundImage}
          alt="Background"
        ></StyledBackgroundImage>
        <Routes>
          {!manager.logined && <Route path="/login" element={<Auth></Auth>}></Route>}
          {manager.logined && <Route path="/form" element={<UserDataForm></UserDataForm>}></Route>}
          {manager.logined ? (
            <Route path="*" element={<Navigate to="/form" />}></Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" />}></Route>
          )}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
