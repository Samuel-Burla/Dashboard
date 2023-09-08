import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box p="10px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box color={colors.greenAccent[500]}>{icon}</Box>
          <Typography variant="h5" fontWeight="bold" color={colors.grey[100]}>
            {title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" color={colors.greenAccent[500]}>
          {subtitle}
        </Typography>
        <Typography variant="h6" color={colors.greenAccent[400]}>
          +{increase}%
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
