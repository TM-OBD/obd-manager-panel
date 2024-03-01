import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserDataForm from "./pages/UserDataForm/UserDataForm";
import { useState } from "react";

const managerInitial = {
  logined: false,
  login: "",
  pass: "",
};

function App() {
  const [manager, setManager] = useState(managerInitial);
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
      <Box sx={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "1024px",
      }}>
        <Routes>
          <Route path="/login" element={<Auth></Auth>}></Route>
          <Route path="/form" element={<UserDataForm></UserDataForm>}></Route>
          {!manager.logined && (
            <Route path="*" element={<Navigate to="/login" />}></Route>
          )}
          {!manager.logined && (
            <Route path="*" element={<Navigate to="/form" />}></Route>
          )}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
