const express = require('express');
const userFeedbackRoute = express.Router();
const {AddFeedback, getFeedback, Resumecount, printResume} =  require('../controller/userFeedbackController')
// getFeedback
// printResume
userFeedbackRoute.post('/addFeedback',AddFeedback)
userFeedbackRoute.post('/printResume',printResume)
userFeedbackRoute.get('/getFeedback',getFeedback)
userFeedbackRoute.get('/Resumecount',Resumecount)
module.exports = userFeedbackRoute