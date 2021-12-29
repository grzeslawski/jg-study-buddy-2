import React, { useState, useEffect } from 'react';
import axios from 'axios';

const withEventsData = (WrappedComponent, group) => {
  return function WithEventsDataWrapper() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
    }, []);

    return <WrappedComponent events={events} />;
  };
};

export const DisplaysEvents = (props) => {
  return (
    <div>
      Log events
      {console.log(props)}
    </div>
  );
};

export const DisplaysEventsData = withEventsData(DisplaysEvents, 'A');
