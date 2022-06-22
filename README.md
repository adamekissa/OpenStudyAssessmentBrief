# OpenStudyAssessmentBrief

Hello,

This project is a REST Api which will help it users to utilize requested course data.

This Rest Api is built on node.js with express.


AVAILABLE REQUEST ROUTES

:/course
POST
● To Create a course: Make a Post request with body to ==> '/courses'

GET
● GET All courses: make a get request to ==> '/courses'
● GET a specific course based on course id: Make a get request with course id to ==>  '/courses/:course_id'

PATCH
● Update a courses by course id: Make a put or patch request to ==> '/courses/:course_id'

DELETE
● Delete a specific course by course id : make a DELETE request to '/courses/:course_id'

:/carts
GET
Get all catrs: Make a get request to ==> '/carts'

To use this project on your local computer: 
1. Clone this repository.
3. Install node modules by 'npm i' command.
4. Create a .env file in the root directory of the project.
5. Create a heroku account and put credentials in .env file.
6. Run scripts in the db folder of this project to create and poppulate database ("dbcreateCoursesTable", "dbpopulateCoursesTable":)
7. Command:  npm start, npm run dev
8. Enjoy :) ! More upgrades and updates on the project soon



If I had more time to work on this project, I would like to add more features like:
1. Validate all inputs sent through http requests as well as on react component level
2. I would like to add all relevant routes for the carts endpoint.
3. I would like to finish writing test for all the available routes
4. I would like to finish all the error handling
5. I would like to add extra layer of validation to both the http request and react form 
6. Build the UI and UX by adding more react components to Update a course, get all courses in ascending or descending order
