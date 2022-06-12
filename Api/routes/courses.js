import express from "express";
const router = express.Router();
import {getAllCourses, insertCourse, getCourseById, updateCourses, deleteCourse, selectDistinctCategory, getAllCoursesInCategory, getAllCoursesInCategoryWithLimit} from "../model/courses.js";


//GET all Courses
router.get("/", async function(req, res){
    try{
        const allCourses = await getAllCourses();
        res.json({success: true,
                  payload: allCourses});
    }
    catch (err) {
        console.log(err);
        res.json({
          success: false,
          payload: "Sorry I couldnt get the Payload!",
        });
      }
})

//GET a specific course based on ID.
router.get("/:course_id", async function(req, res){
        const id = Number(req.params.course_id);
    try{
        const courseFoundById = await getCourseById(id);
        res.json({success: true,
                  payload: courseFoundById});
    }
    catch (err) {
        console.log(err);
        res.json({
          success: false,
          payload: "Sorry I couldnt get the Payload!",
        });
      }
})

//GET all categories
router.get("/distinct/categories", async function(req, res){
    try{
        const distinctCategory = await selectDistinctCategory();
        res.json({success: true,
                  payload: distinctCategory})
    }
    catch (err) {
        console.log(err);
        res.json({
          success: false,
          payload: "Sorry I couldnt get the Payloadxxx!",
        });
      }
})

//GET all courses in a specific category
router.get("/courses/:category", async function(req, res){
  const category = req.params.category;
  console.log(category);
  const coursesInCategory = await getAllCoursesInCategory(category);
  console.log("found it!", coursesInCategory)
  res.json({success: true, payload: coursesInCategory});
})

//Limit return results on GET all courses in a specific category eg. limit=5
router.get("/courses/:category/:limit", async function(req, res){
  console.log("Im here")
  const category = req.params.category;
  const limit = Number(req.params.limit);
  const cousesInCategoryLimit = await getAllCoursesInCategoryWithLimit(category, limit);
  console.log(cousesInCategoryLimit);
  res.json({success: true, payload: cousesInCategoryLimit});
})

router.post("/", async function(req, res){
    const title = req.body.title;
    const category = req.body.category;
    try{
        const courseToInsert = await insertCourse(title, category);
        res.json({success: true,
                  payload: courseToInsert});
    }
    catch (err) {
        console.log(err);
        res.json({
          success: false,
          payload: "Sorry I couldnt get the Payload!",
        });
      }

})

router.put("/:id", async function(req, res){
    const id = Number(req.params.id);
    const title = req.body.title;
    const category = req.body.category;
    console.log(id, title, category);
    try{
        const courseToUpdate = await updateCourses(id, title, category);
        res.json({success: true,
                  payload: courseToUpdate});
    }
    catch (err) {
        console.log(err);
        res.json({
          success: false,
          payload: "Sorry I couldnt get the Payload!",
        });
      }
})

router.delete("/:id", async function(req, res){
    const id = Number(req.params.id);
    try{
        const courseToDelete = deleteCourse(id);
        res.json({success: true, 
                  payload: courseToDelete});
    }
    catch (err) {
        console.log(err);
        res.json({
          success: false,
          payload: "Sorry I couldnt get the Payload!",
        });
      }
})

export default router;