import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

const OBD = ({
  socketConnectionState,
  setSocketConnectionState,
  stompConnectionState,
  setStompConnectionState,
}) => {
  const handleGetAllUsers = async () => {
    if (!stompConnectionState) {
      console.error("Error during send request for getting all users");
      return;
    }
    // Отправка запроса на получение всех пользователей
    stompConnectionState.send("/api/v1/users", {});
  };

  // Effects ================================================

  useEffect(() => {
    if (stompConnectionState) {
      // Подписка на канал
      stompConnectionState.connect({}, () => {
        stompConnectionState.subscribe("/api/v1/users", (data) => {
          // тут должен быть ендпоинт для подписки
          // Обработка нового сообщения
          console.log(data);
        });
      });
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginTop: "80px",
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Get all users
      </Typography>
      <Button variant="outlined" onClick={handleGetAllUsers}>
        Get
      </Button>
    </Box>
  );
};

export default OBD;
