import { Box, Typography } from "@mui/material";

const UserDataForm = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: (theme) => theme.palette.primary.white.light,
        }}
      >
        It's Form page!
      </Typography>
    </Box>
  );
};

export default UserDataForm;
