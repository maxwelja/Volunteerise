const express = require('express');
const router = express.Router();
const { createEvent, readEvent, readAll, readQueried, updateEvent, deleteEvent,
    cTest, rTest, rAllTest//, uTest, dTest
} = require('./controllers/EventController');

// CRUD operations for events
router.post('/events', createEvent);
router.get('/events/:id', readEvent);
router.get('/events/', readAll);
router.patch('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

// debugging routes
router.post('/test', cTest);
router.get('/test/:id', rTest);
router.get('/test/', rAllTest);
//router.patch('/test/:id', uTest);
//router.delete('/test/:id', dTest);

module.exports = router;