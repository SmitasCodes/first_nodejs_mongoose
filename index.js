require('dotenv').config();
const connectionDB = require('./config/db')
connectionDB();

const express = require('express');
const app = express();
app.use(express.json());

const {
    createCourse,
    getCourse,
    updateCourses,
    deleteCourses
} = require('./controllers/courseController')

app.post('/api/courses',createCourse);
app.get('/api/courses/:id',getCourse)
app.put('/api/courses/:id',updateCourses)
app.delete('/api/courses/:id',deleteCourses)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})

