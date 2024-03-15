import styled from "@emotion/styled";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { sendUserData } from "../../shared/Fetches";
import { useState } from "react";

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background-color: ${({ theme }) => theme.palette.primary.mainBg};
  border: 1px solid ${({ theme }) => theme.palette.primary.blue.light};
  /* max-width: 50%;
  min-width: 40%; */
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
    fontSize: "10px",
    padding: "8px 4px 8px 4px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
    padding: "8px 4px 8px 4px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    padding: "14px 6px 14px 6px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
    padding: "14px 6px 14px 6px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
    padding: "14px 6px 14px 6px",
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
    fontSize: "14px",
    padding: "8px 4px 8px 4px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
    padding: "16px 8px 16px 8px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "22px",
    padding: "16px 8px 16px 8px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "24px",
    padding: "16px 8px 16px 8px",
  },
}));

const UserDataForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const [alert, setAlert] = useState({
    open: false,
    success: true,
    vertical: "top",
    horizontal: "right",
  });

  const onSubmit = async (userData) => {
    // const serverData = sendUserData(userData)
    setAlert({ ...alert, open: true, success: false });
    setTimeout(() => {
      setAlert({ ...alert, open: false });
    }, 2000);

    // resetField("name");
    // resetField("surname");
    // resetField("fathername");
    // resetField("email");
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
      {alert && (
        <Snackbar
          open={alert.open}
          autoHideDuration={2000}
          anchorOrigin={{
            vertical: alert.vertical,
            horizontal: alert.horizontal,
          }}
        >
          <Alert severity={alert.success ? "success": "error"} variant="filled" sx={{ width: "100%" }}>
            {alert.success ? "Користувач успішно зареєстрований" : "Помилка при з'єднанні з сервером"}
          </Alert>
        </Snackbar>
      )}
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: {
            xl: "40%",
            lg: "40%",
            md: "40%",
            sm: "50%",
            xs: "70%",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            color: (theme) => theme.palette.primary.white.light,
            fontWeight: 600,
            fontSize: {
              xl: "26px",
              lg: "24px",
              md: "22px",
              sm: "16px",
              xs: "14px",
            },
          }}
        >
          Введіть дані кліента
        </Typography>

        <Box
          sx={{
            // container for name and surname
            display: "flex",
            width: "100%",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <StyledInput
              placeholder="Ім'я (Обов'язково)"
              {...register("name", {
                required: "Поле є обов'язковим",
                minLength: {
                  value: 3,
                  message: "Мінімум 3 символи",
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 20 символів",
                },
                pattern: {
                  value: /^[A-ZА-ЯЁҐЄІЇ][a-zа-яёґєії']{1,}$/u,
                  message: "Тільки літери, перша - велика",
                },
              })}
            />
            {errors?.name && (
              <Typography
                variant="body1"
                sx={{
                  color: "red",
                  fontSize: {
                    xl: "16px",
                    lg: "14px",
                    md: "12px",
                    sm: "10px",
                    xs: "8px",
                  },
                }}
              >
                {errors.name.message}
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
              placeholder="Прізвище (Обов'язково)"
              {...register("surname", {
                required: "Поле є обов'язковим",
                minLength: {
                  value: 3,
                  message: "Мінімум 3 символи",
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 20 символів",
                },
                pattern: {
                  value: /^[A-ZА-ЯЁҐЄІЇ][a-zа-яёґєії']{1,}$/u,
                  message: "Тільки літери, перша - велика",
                },
              })}
            />
            {errors?.surname && (
              <Typography
                variant="body1"
                sx={{
                  color: "red",
                  fontSize: {
                    xl: "16px",
                    lg: "14px",
                    md: "12px",
                    sm: "10px",
                    xs: "8px",
                  },
                }}
              >
                {errors.surname.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <StyledInput
            placeholder="По-батькові (Необов'язково)"
            {...register("fathername", {
              // required: "Поле є обов'язковим",
              minLength: {
                value: 4,
                message: "Мінімум 4 символи",
              },
              maxLength: {
                value: 40,
                message: "Максимум 40 символів",
              },
              pattern: {
                value: /^[A-ZА-ЯЁҐЄІЇ][a-zа-яёґєії']{1,}$/u,
                message: "Тільки літери, перша - велика",
              },
            })}
          />
          {errors?.fathername && (
            <Typography
              variant="body1"
              sx={{
                color: "red",
                fontSize: {
                  xl: "16px",
                  lg: "14px",
                  md: "12px",
                  sm: "10px",
                  xs: "8px",
                },
              }}
            >
              {errors.fathername.message}
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
            placeholder="Пошта (Обов'язково)"
            {...register("email", {
              required: "Поле є обов'язковим",
              minLength: {
                value: 4,
                message: "Мінімум 4 символи",
              },
              maxLength: {
                value: 40,
                message: "Максимум 40 символів",
              },
              pattern: {
                value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Некоректна пошта, приклад mailadress@mail.com",
              },
            })}
          />
          {errors?.email && (
            <Typography
              variant="body1"
              sx={{
                color: "red",
                fontSize: {
                  xl: "16px",
                  lg: "14px",
                  md: "12px",
                  sm: "10px",
                  xs: "8px",
                },
              }}
            >
              {errors.email.message}
            </Typography>
          )}
        </Box>

        <StyledButton type="submit" />
      </StyledForm>
    </Box>
  );
};

export default UserDataForm;
