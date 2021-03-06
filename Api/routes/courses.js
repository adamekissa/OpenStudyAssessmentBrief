import express from "express";
const router = express.Router();
import {getAllCourses, insertCourse, getCourseById, updateCourses, deleteCourse, selectDistinctCategory, getAllCoursesInCategory, getAllCoursesInCategoryWithLimit} from "../model/courses.js";
import { param, body, validationResult } from "express-validator";

//GET all Courses
router.get("/",  async function(req, res){

    try{
        const allCourses = await getAllCourses();
        if (allCourses === []){
          res.json({
            success: false,
            payload: "0 courses in this category!"
          })
        }
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

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
        const id = Number(req.params.course_id);
    try{
        const courseFoundById = await getCourseById(id);
        if(courseFoundById === []){
          res.json({
            success: false,
            payload: "0 courses in this category!"
          })
        } else{
            res.json({success: true,
            payload: courseFoundById});
        }
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

router.post("/", body("title").isString(),  body("category").isString(), async function(req, res){
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
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

router.put("/:id", body("title").isString(),  body("category").isString(), async function(req, res){
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
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

router.delete("/:course_id", async function(req, res){
    const id = Number(req.params.course_id);
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