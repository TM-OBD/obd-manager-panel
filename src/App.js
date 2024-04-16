import { Box } from "@mui/material";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserDataForm from "./pages/UserDataForm/UserDataForm";
import { useEffect, useState } from "react";
// import backgroundImage from "./images/Background.png";
import styled from "@emotion/styled";
import Header from "./components/Header";

import io from "socket.io-client";
import Stomp from "stompjs";
import { connectToSocket } from "./shared/SocketFunctions";

const StyledBackgroundImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
`;

function App() {
  const [managerLogined, setManagerLogined] = useState(true);

  const navigate = useNavigate();

  // Effects ===================================================================

  useEffect(() => {
    if (!managerLogined) {
      navigate("/login");
      return;
    }
    navigate("/form");
    return;
  }, [managerLogined]);

  useEffect(() => {
    try {
      const socket = connectToSocket();

      if (!socket) {
        console.log("Error during connection to socket");
      }

      const stompClient = Stomp.over(socket);

      // Подписка на канал
      stompClient.connect({}, () => {
        stompClient.subscribe("some_endpoint", () => { // тут должен быть ендпоинт для подписки
          // Обработка нового сообщения
        });
      });
    } catch (e) {
      console.error(e);
    }

    return () => {
      stompClient.disconnect();
    };
  }, []);

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
      <Header></Header>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* <StyledBackgroundImage
          src={backgroundImage}
          alt="Background"
        ></StyledBackgroundImage> */}
        <Routes>
          {!managerLogined && (
            <Route
              path="/login"
              element={<Auth setManagerLogined={setManagerLogined}></Auth>}
            ></Route>
          )}
          {managerLogined && (
            <Route path="/form" element={<UserDataForm></UserDataForm>}></Route>
          )}
          {managerLogined ? (
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
