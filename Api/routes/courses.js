import express from "express";
const router = express.Router();
import {getAllCourses, insertCourse, getCourseById, updateCourses, deleteCourse, selectDistinctCategory} from "../model/courses.js";


router.get("/", async function(req, res){
    const allCourses = await getAllCourses();
    res.json({payload: allCourses});
})

router.get("/:id", async function(req, res){
    const id = Number(req.params.id);
    const courseFoundById = await getCourseById(id);
    res.json({payload: courseFoundById});
})

router.get("/category", async function(req, res){
    const distinctCategory = await selectDistinctCategory();
    res.json({payload: distinctCategory})
})

router.post("/", async function(req, res){
    const title = req.body.title;
    const category = req.body.category;
    const courseToInsert = await insertCourse(title, category);
    res.json({payload: courseToInsert});

})

router.put("/:id", async function(req, res){
    const id = Number(req.params.id);
    const title = req.body.title;
    const category = req.body.category;
    console.log(id, title, category);
    const courseToUpdate = await updateCourses(id, title, category);
    res.json({payload: courseToUpdate});
})

router.delete("/:id", async function(req, res){
    const id = Number(req.params.id);
    const courseToDelete = deleteCourse(id);
    res.json({payload: courseToDelete});
})

export default router;