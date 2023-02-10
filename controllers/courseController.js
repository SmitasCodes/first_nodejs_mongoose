const Course = require('../models/Course');

// @route POST /api/courses
const createCourse = async (req, res) => {
    if (!req.body.name || !req.body.author) res.status(404).send("Not found")
    try{
        const course = await Course.create({
            name: req.body.name,
            author: req.body.author,
            isPublished: true
        })
        res.status(200).send(course)
    }
    catch (err){
        res.status(500).send(err.message);
    }
}

// @route GET /courses/:id
const getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).send("The course with the given ID was not found.");
        res.status(200).send(course);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

// @route PUT /courses/:id
const updateCourses = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.body._id, { name: req.body.name, author: req.body.author });
        if (!course) return res.status(404).send("The course with the given ID was not found.");
        res.status(200).send(course);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

// @route DELETE /courses/:id
const deleteCourses = async (req, res) => {
    try {
        const course = await Course.findByIdAndRemove(req.body._id);
        if (!course) return res.status(404).send("The course with the given ID was not found.");
        res.status(200).send(course);
      } catch (err) {
        res.status(500).send(err.message);
      }
}

module.exports = {
    createCourse,
    getCourse,
    updateCourses,
    deleteCourses
}