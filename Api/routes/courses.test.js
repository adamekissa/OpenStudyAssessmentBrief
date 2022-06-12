import app from "../app.js"
import request from "supertest"
import {getAllCourses, getCourseById} from "../model/courses.js";


test("Has the structure { success: true, payload: array }", async function () {
    await request(app)
   .get("/courses")
  
    expect(200)
  });

const  courses = getCourseById()

  test("Get all children { success: true, payload: array }", function () {
    
   //await request(app)
    const y = getAllCourses()
    const actual = { success: true, 
        payload: y }
    
    const expected = { success: true, 
        payload: courses }
  
  
   //console.log(expected)
   
   expect(actual).toEqual(expected);
  });
  