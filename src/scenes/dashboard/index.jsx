import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Dashboard" subtitle="A super Dashboard" />
        <Box display="flex" alignItems="center">
          <Button sx={{ backgroundColor: colors.blueAccent[500] }}>
            <Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
              Download
            </Typography>
            <IconButton>
              <DownloadOutlinedIcon />
            </IconButton>
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        height="70vh"
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="repeat(10, 1fr)"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="12,767"
            subtitle="Email Sent"
            icon={<EmailIcon />}
            progress="0.47"
            increase="43"
          />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="12,767"
            subtitle="Sales Obtained"
            icon={<PointOfSaleIcon />}
            progress="0.60"
            increase="23"
          />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="32,767"
            subtitle="New Clients"
            icon={<PersonAddIcon />}
            progress="0.17"
            increase="4"
          />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <StatBox
            title="1,323,767"
            subtitle="Trafic inbound"
            icon={<TrafficIcon />}
            progress="0.87"
            increase="23"
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn="span 7"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          p="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5">Revenues</Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                56,876$
              </Typography>
            </Box>
            <Box mr="10px">
              <IconButton>
                <DownloadOutlinedIcon sx={{ color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="100%" ml="-30px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          sx={{ overflowY: "scroll" }}
        >
          <Box borderBottom={`4px solid ${colors.primary[500]}`} p="10px">
            <Typography variant="h4" fontWeight="bold">
              Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              borderBottom={`4px solid ${colors.primary[500]}`}
              alignItems="center"
              p="10px"
            >
              <Box width="80px">
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  {transaction.txId}
                </Typography>
                <Typography variant="h6" color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                borderRadius="5px"
                p="5px 10px"
                width="80px"
              >
                $ {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="10px"
        >
          <Box>
            <Typography variant="h6">Campaign</Typography>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Box mt="-10px">
              <ProgressCircle progress="0.3" size="60" />
            </Box>
            <Box textAlign="center" mt="3px">
              <Typography variant="h6" color={colors.greenAccent[500]}>
                +76,764$
              </Typography>
              <Typography variant="h6">Last Week</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="10px"
        >
          <Box>
            <Typography variant="h6">Barchart</Typography>
          </Box>
          <Box height="90%">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="10px"
        >
          <Box>
            <Typography variant="h6">Geography Chart</Typography>
          </Box>
          <Box height="90%">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
