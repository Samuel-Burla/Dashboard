import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="70vh" border="1px solid" borderColor={colors.grey[100]}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geo;
