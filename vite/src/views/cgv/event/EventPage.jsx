import React, { useState, useEffect, useRef } from 'react';
import { Box, Tabs, Tab, TextField, Button, Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import LotteMateApi from '../../../api/lotteApi';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventType, setEventType] = useState(20); // 초기 이벤트 타입을 영화로 설정
  const api = useRef(new LotteMateApi()).current;

  useEffect(() => {
    document.title = '롯데시네마 이벤트 목록';
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await api.getLotteEventListAsync(eventType);
      setEvents(eventData);
      setFilteredEvents(eventData);
    };
    fetchEvents();
  }, [eventType]);

  const toggleNavItem = (type) => {
    setEventType(type);
  };

  const handleSearchChange = (event) => {
    const searchText = event.target.value.toLowerCase().trim();
    if (!searchText) {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => event.eventName.toLowerCase().trim().includes(searchText));
      setFilteredEvents(filtered);
    }
  };

  const handleCardClick = (event) => {
    window.location.href = `https://event.lottecinema.co.kr/NLCHS/Event/EventTemplateInfo?eventId=${event.eventId}`;
  };

  return (
    <Box sx={{ padding: 0 }}>
      <Box component="header" sx={{ marginBottom: 2 }}>
        <Tabs value={eventType} onChange={(e, newValue) => toggleNavItem(newValue)} aria-label="event types" variant='scrollable' scrollButtons="auto" >
          {Object.keys(LotteEventType).map((type) => (
            <Tab key={type} label={LotteEventType[type]} value={type} />
          ))}
        </Tabs>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, alignItems: 'center' }}>
          <TextField
            variant="outlined"
            onChange={handleSearchChange}
            placeholder="이벤트 검색"
            sx={{ width: '80%' }}
            inputProps={{ style: { height: 30, padding: '0 14px' } }}
          />
          <Button variant="contained" color="primary" sx={{ marginLeft: 2, height: 30 }}>검색</Button>
        </Box>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {filteredEvents.length > 0 ? filteredEvents.map(event => (
            <Grid item xs={12} sm={6} md={3} key={event.eventId}>
              <Card onClick={() => handleCardClick(event)} sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  image={event.imageUrl}
                  alt={event.eventName}
                  sx={{ width: '100%', height: 'auto' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" dangerouslySetInnerHTML={{ __html: event.eventName }} />
                  <Typography variant="body2" color="textSecondary">
                    {`${event.progressStartDate} ~ ${event.progressEndDate}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )) : (
            <Typography variant="body1" sx={{ marginTop: 2 }}>이벤트가 없습니다.</Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

const LotteEventType = {
  20: '영화',
  40: '시사회/무대인사',
  10: 'HOT',
  30: '극장',
  50: '제휴'
};

export default EventPage;
