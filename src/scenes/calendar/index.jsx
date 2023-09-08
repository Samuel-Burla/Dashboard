import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box, List, ListItem, Typography, ListItemText } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState([]);

  const addevent = (selected) => {
    const calendarApi = selected.view.calendar;
    const title = prompt("put a title");
    if (title) {
      calendarApi.addevent({
        id: { title },
        title,
        start: selected.start,
        end: selected.end,
        allday: selected.allday,
      });
    }
  };

  const removeevent = (selected) => {
    if (window.confirm("are you sure you want to remove that event?")) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Super Calendar" />
      <Box>
        <Box>
          <List>

          {currentEvent.map((event)=>{
            <ListItem ></ListItem>
          })}
          </List>
        </Box>
        <Box>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
