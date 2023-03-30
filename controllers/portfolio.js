const Projects = require('../models/Projects')
const Courses = require('../models/Courses')
const Contact = require('../models/Contact')
const About = require('../models/About')
const Experience = require('../models/Experience')
const Intro = require('../models/Intro')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
exports.getPortfolioData = async (req, res) => {

  const intros = await Intro.find();
  const abouts = await About.find();
  const projects = await Projects.find();
  const contacts = await Contact.find();
  const experiences = await Experience.find();
  const courses = await Courses.find();

  res.status(StatusCodes.OK).send({
    intro: intros[0],
    about: abouts[0],
    projects: projects,
    contact: contacts[0],
    experiences: experiences,
    courses: courses,
  });
}

// docs: update intro
exports.updateIntro = async (req, res) => {
  const { _id } = req.body;
  if (!_id) throw new BadRequestError("id is required");
  const intro = await Intro.findOneAndUpdate(
    { _id: _id },
    req.body,
    { new: true }
  );
  res.status(StatusCodes.OK).send({
    data: intro,
    success: true,
    message: "Intro updated successfully",
  });
}

// docs: update about
exports.updateAbout = async (req, res) => {
  const { _id } = req.body;
  if (!_id) throw new BadRequestError("id is required");
  const about = await About.findOneAndUpdate(
    { _id: _id },
    req.body,
    { new: true }
  );
  res.status(StatusCodes.OK).send({
    data: about,
    success: true,
    message: "Abouts updated successfully",
  });

}

// docs: add experience
exports.addExperience = async (req, res) => {

  const experience = new Experience(req.body);
  await experience.save();
  res.status(StatusCodes.OK).send({
    data: experience,
    success: true,
    message: "Experience added successfully",
  });

}

// docs: update experience
exports.updateExperience = async (req, res) => {
  const { _id } = req.body;
  if (!_id) throw new BadRequestError("id is required");
  const experience = await Experience.findOneAndUpdate(
    { _id: _id },
    req.body,
    { new: true }
  );
  res.status(StatusCodes.OK).send({
    data: experience,
    success: true,
    message: "Experience updated successfully",
  });

}

// docs: delete experience
exports.deleteExperience = async (req, res) => {
  const { _id } = req.body;
  if (!_id) throw new BadRequestError("id is required");
  const experience = await Experience.findOneAndDelete({ _id: _id });
  res.status(StatusCodes.OK).send({
    data: experience,
    success: true,
    message: "Experience deleted successfully",
  });

}

// docs: add project
exports.addProject = async (req, res) => {

  const project = new Projects(req.body);
  await project.save();
  res.status(StatusCodes.OK).send({
    data: project,
    success: true,
    message: "Project added successfully",
  });

}


// docs: update project
exports.updateProject = async (req, res) => {
  const { _id } = req.body;
  if (!_id) throw new BadRequestError("id is required");
  const project = await Projects.findOneAndUpdate(
    { _id: _id },
    req.body,
    { new: true }
  );
  res.status(StatusCodes.OK).send({
    data: project,
    success: true,
    message: "Project updated successfully",
  });

}


// docs: delete project
exports.deleteProject = async (req, res) => {
  const { _id } = req.body;
  if (!_id) throw new BadRequestError("id is required");
  const project = await Projects.findOneAndDelete({ _id: _id });
  res.status(StatusCodes.OK).send({
    data: project,
    success: true,
    message: "Project deleted successfully",
  });

}

// docs: add course
exports.addCourse = async (req, res) => {

    const course = new Courses(req.body);
    await course.save();
    res.status(StatusCodes.OK).send({
      data: course,
      success: true,
      message: "Course added successfully",
    });

}

// docs: update course
exports.updateCourse = async (req, res) => {
    const { _id } = req.body;
    if (!_id) throw new BadRequestError("id is required");
    const course = await Courses.findOneAndUpdate(
      { _id: _id },
      req.body,
      { new: true }
    );
    res.status(StatusCodes.OK).send({
      data: course,
      success: true,
      message: "Course updated successfully",
    });

}

// docs: delete course
exports.deleteCourse = async (req, res) => {

    const course = await Courses.findOneAndDelete({ _id: _id });
    res.status(StatusCodes.OK).send({
      data: course,
      success: true,
      message: "Course deleted successfully",
    });

}

// docs: update contact
exports.updateContact = async (req, res) => {
    const { _id } = req.body;
    if (!_id) throw new BadRequestError("id is required");
    const contact = await Contact.findOneAndUpdate(
      { _id: _id },
      req.body,
      { new: true }
    );
    res.status(StatusCodes.OK).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
 
}

