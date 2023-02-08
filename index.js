require('dotenv').config();
const connectionDB = require('./config/db')
connectionDB();

const express = require('express');
const app = express();
app.use(express.json());

const {
    createCourse,
    getCourses,
    updateCourses,
    deleteCourses
} = require('./controllers/courseController')

app.post('/api/create',createCourse);
app.get('/api/get',getCourses)
app.put('/api/update',updateCourses)
app.delete('/api/delete',deleteCourses)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})

