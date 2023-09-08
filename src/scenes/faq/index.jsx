import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="20px"
      height="75vh"
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: colors.primary[400],
        },
      }}
    >
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box height="70vh" sx={{ overflowY: "scroll" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
              sed lorem id iaculis. Nam vel dictum sem, blandit vulputate eros.
              Cras et tristique augue, non mollis justo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
              sed lorem id iaculis. Nam vel dictum sem, blandit vulputate eros.
              Cras et tristique augue, non mollis justo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
              sed lorem id iaculis. Nam vel dictum sem, blandit vulputate eros.
              Cras et tristique augue, non mollis justo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
              sed lorem id iaculis. Nam vel dictum sem, blandit vulputate eros.
              Cras et tristique augue, non mollis justo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 5
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
              sed lorem id iaculis. Nam vel dictum sem, blandit vulputate eros.
              Cras et tristique augue, non mollis justo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Question 6
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
              sed lorem id iaculis. Nam vel dictum sem, blandit vulputate eros.
              Cras et tristique augue, non mollis justo.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
