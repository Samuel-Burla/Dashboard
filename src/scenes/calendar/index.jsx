import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { tokens } from "../../theme";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Write a title for the new event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to remove this event: ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="A simple calendar" />
      <Box display="flex" justifyContent="space-between" height="70vh">
        <Box
          width="25%"
          p="10px"
          sx={{ backgroundColor: colors.primary[400], overflowY: "scroll" }}
        >
          {/* Events */}
          <List>
            <Typography variant="h4" sx={{ marginBottom: "15px" }}>
              Events
            </Typography>
            {currentEvents.map((event, i) => (
              <ListItem
                key={`${event.id}-${i}`}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  borderRadius: "4px",
                  marginBottom: "10px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography variant="h6">
                      {formatDate(event.start)}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          flex="1 1 100%"
          ml="20px"
          sx={{
            "& .fc-list-day-cushion": {
              backgroundColor: colors.primary[400],
            },
            "& .fc-event.fc-event-start.fc-event-end.fc-event-past.fc-list-event":
              {
                "&:hover": {
                  backgroundColor: "red !important",
                },
              },
          }}
        >
          {/* Calendar */}
          <FullCalendar
            height="70vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              start: "prev,next today",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            initialEvents={[
              {
                title: "First event",
                start: "2023-09-11",
              },
              {
                title: "Second event",
                start: "2023-09-27",
              },
            ]}
            select={handleDateClick}
            eventClick={handleEventClick}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            editable={true}
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
