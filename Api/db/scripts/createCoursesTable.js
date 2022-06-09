import query from "../index.js";

async function createCoursesTable() {
    const sqlString = `CREATE TABLE IF NOT EXISTS courses (course_id SERIAL PRIMARY KEY, title TEXT, category TEXT);`
    const res = await query(sqlString);
    console.log("Courses table created", res);
}

createCoursesTable();