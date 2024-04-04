import styled from "@emotion/styled";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 32px 16px 32px;
  background-color: ${({ theme }) => theme.palette.primary.mainBg};
  border: 1px solid ${({ theme }) => theme.palette.primary.blue.light};
  max-width: 40%;
  min-width: 30%;
  border-radius: 12px;
  z-index: 2;
`;

const StyledInput = styled("input")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.mainBg,
  color: theme.palette.primary.white.light,
  fontSize: "18px",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.primary.blue.light}`,
  outline: "none",
  // focus не работает
  transition: "border 0.3s",
  "&:focus": {
    border: `1px solid ${theme.palette.primary.blue.medium}`,
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
    padding: "8px 4px 8px 4px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    padding: "8px 4px 8px 4px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    padding: "16px 8px 16px 8px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "24px",
    padding: "16px 8px 16px 8px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "26px",
    padding: "16px 8px 16px 8px",
  },
}));

const StyledButton = styled("input")(({ theme }) => ({
  cursor: "pointer",
  width: "100%",
  backgroundColor: theme.palette.primary.blue.light,
  transition: "background-color 0.3s",
  color: theme.palette.primary.white.light,
  fontSize: "18px",
  border: "none",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: theme.palette.primary.blue.medium,
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
    padding: "8px 4px 8px 4px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    padding: "8px 4px 8px 4px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    padding: "16px 8px 16px 8px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "24px",
    padding: "16px 8px 16px 8px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "26px",
    padding: "16px 8px 16px 8px",
  },
}));

const Auth = ({setManagerLogined}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [customAlert, setAlert] = useState({
    open: false,
    success: false,
    vertical: "top",
    horizontal: "right",
    message: "Помилка при з'єднанні з сервером",
  });

  // JUST FOR TESTING
  const LOGIN = "admin";
  const PASSWORD = "admin";

  const onSubmit = (data) => {
    const { login, password } = data;
    if (!login || !password) {
      setAlert({
        ...customAlert,
        open: true,
        success: false,
        message: "Уведіть коректні дані",
      });
      setTimeout(() => {
        setAlert({ ...customAlert, open: false });
      }, 2000);
      return;
    }
    if (login !== LOGIN || password !== PASSWORD) {
      setAlert({
        ...customAlert,
        open: true,
        success: false,
        message: "Логін або пароль введено невірно",
      });
      setTimeout(() => {
        setAlert({ ...customAlert, open: false });
      }, 2000);
      return;
    }
    
    setManagerLogined(true)
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {customAlert && (
        <Snackbar
          open={customAlert.open}
          autoHideDuration={2000}
          anchorOrigin={{
            vertical: customAlert.vertical,
            horizontal: customAlert.horizontal,
          }}
        >
          <Alert
            severity={customAlert.success ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {customAlert.message}
          </Alert>
        </Snackbar>
      )}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            color: (theme) => theme.palette.primary.white.light,
            fontWeight: 600,
            fontSize: {
              xl: "28px",
              lg: "26px",
              md: "24px",
              sm: "18px",
              xs: "16px",
            },
          }}
        >
          Вхід
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          <StyledInput
            placeholder="Логін"
            {...register("login", {
              required: "Поле є обов'язковим",
              minLength: {
                value: 4,
                message: "Мінімум 4 символи",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символів",
              },
            })}
          />
          {errors?.login && (
            <Typography
              variant="body1"
              sx={{
                color: "red",
                fontSize: {
                  lg: "14px",
                  md: "12px",
                  sm: "10px",
                  xs: "8px",
                },
              }}
            >
              {errors.login.message}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <StyledInput
            type="password"
            placeholder="Пароль"
            {...register("password", {
              required: "Поле є обов'язковим",
            })}
          />
          {errors?.password && (
            <Typography
              variant="body1"
              sx={{
                color: "red",
                fontSize: {
                  lg: "16px",
                  md: "12px",
                  sm: "10px",
                  xs: "8px",
                },
              }}
            >
              {errors.password.message}
            </Typography>
          )}
        </Box>

        <StyledButton type="submit" />
      </StyledForm>
    </Box>
  );
};

export default Auth;
