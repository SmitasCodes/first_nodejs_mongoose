const Course = require('../models/Course');

// @route POST api/create
const createCourse = async (req, res) => {
    if (!req.body.name || !req.body.author) res.status(404).send("Not found")

    const course = await Course.create({
        name: req.body.name,
        author: req.body.author,
        isPublished: true
    })

    res.status(200).json(course)
}

// @route GET api/get
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

// @route PUT api/update
const updateCourses = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.body._id, { name: req.body.name, author: req.body.author });
        if (!course) return res.status(404).send("The course with the given ID was not found.");
        res.send(course);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

// @route DELETE api/delete
const deleteCourses = async (req, res) => {
    try {
        const course = await Course.findByIdAndRemove(req.body._id);
        if (!course) return res.status(404).send("The course with the given ID was not found.");
        res.send(course);
      } catch (err) {
        res.status(500).send(err.message);
      }
}

module.exports = {
    createCourse,
    getCourses,
    updateCourses,
    deleteCourses
}