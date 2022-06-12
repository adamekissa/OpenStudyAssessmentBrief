import query from "../index.js";


const sqlString = "INSERT INTO courses(title, category) VALUES ('Mason', 'Handy-work') RETURNING *"

async function populateCourses(){
    const res = await query(sqlString)
    console.log("Row Inserted", res.rows)
}

populateCourses()