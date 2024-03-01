import { Box, Typography } from "@mui/material";

const Auth = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.white.light,
        }}
      >
        It's Auth page!
      </Typography>
    </Box>
  );
};

export default Auth;
