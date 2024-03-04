import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 32px 16px 32px;
  border: 1px solid ${({ theme }) => theme.palette.primary.blue.light};
  max-width: 40%;
  min-width: 30%;
  border-radius: 12px;
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
    border: `1px solid ${(theme) => theme.palette.primary.blue.medium}`,
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

const StyledButton = styled("input")(({theme}) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.blue.light,
  transition: "background-color 0.3s",
  color: theme.palette.primary.white.light,
  fontSize: "18px",
  border: "none",
  borderRadius: "8px",
  // &:hover {
  //   background-color: ${({ theme }) => theme.palette.primary.blue.medium};
  // }
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
}))

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, errors);

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
            }
          }}
        >
          Login
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
            placeholder="login"
            {...register("login", {
              required: "Login is required",
              minLength: {
                value: 4,
                message: "Min lenght is 4 symbols",
              },
              maxLength: {
                value: 20,
                message: "Max lenght is 20 symbols",
              },
            })}
          />
          {errors?.login && (
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
            placeholder="password"
            {...register("password", {
              required: "Password is required",
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
