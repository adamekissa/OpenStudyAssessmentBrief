import query from "../db/index.js";


export async function insertCourse(title, category){
    const res = await query("INSERT INTO courses(title, category) VALUES ($1, $2) RETURNING *", [title, category]);
    return res.rows;
}
export async function getAllCourses(){
    const courses = await query("SELECT * FROM courses");
    return courses.rows;
}
export async function getCourseById(id){
    const res = await query("SELECT * FROM courses WHERE course_id = $1", [id]);
    return res.rows;
}

export async function deleteCourse(id){
    const res = await query("DELETE FROM courses WHERE course_id = $1 RETURNING *", [id])
    return res.rows;
}

export async function updateCourses (id, title, category){
    const res = await query("UPDATE courses SET title = $1, category = $2 WHERE course_id = $3 RETURNING *", [title, category, id]);
    return res;
  }

export async function selectDistinctCategory(){
    const res = await query("SELECT DISTINCT category FROM courses");
    return res.rows;
}

  