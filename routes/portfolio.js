const express = require("express");

const router = express.Router();
const { getPortfolioData,
  updateIntro,
  updateAbout,
  addExperience,
  updateExperience,
  deleteExperience,
  addProject,
  updateProject, 
  deleteProject, 
  addCourse, 
  updateCourse,
  deleteCourse,
  updateContact,
} = require("../controllers/portfolio.js");

// get all portfolio data
router.get("/get-portfolio-data", getPortfolioData);

// update intro
router.post("/update-intro", updateIntro);
// update about
router.post("/update-about", updateAbout);


// add experience

router.post("/add-experience", addExperience);

// update experience
router.post("/update-experience", updateExperience);

// delete experience
router.post("/delete-experience", deleteExperience);

// add project
router.post("/add-project", addProject);

// update project
router.post("/update-project", updateProject);

// delete project

router.post("/delete-project", deleteProject);


// add course
router.post("/add-course", addCourse);

// update course
router.post("/update-course", updateCourse);

// delete course

router.post("/delete-course", deleteCourse);

// update contact
router.post("/update-contact", updateContact);

module.exports = router;