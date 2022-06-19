# OpenStudyAssessmentBrief

Hello,

This project is a REST Api which will help it users to utilize requested course data.

It is built on node.js with express.

A deployed version of the Api can be found here ['https://openstudybrief.herokuapp.com/courses']
Here is a link to a deployed react app on netflify using the api ['https://openstudycoursesamj.netlify.app/'];

To run this app:
npm start
npm run dev

END POINTS
Course: /courses
Carts: /carts


AVAILABLE REQUEST ROUTES

:/course
GET
● GET All courses: ==> '/courses'
● GET a specific course based on ID.: ==>  '/courses/:course_id'
● Limit return results eg. limit=5 : ==> '/courses/courses/:category/:limit'
● GET all categories: ==> '/courese/distinct/categories'
● GET all courses in a specific category: ==> '/courses/courses/:category'

POST
● Add a new course: ==> make a POST request to '/courses'

PUT, PATCH
● Updating a specific course by ID: make a PUT,PATCH request to '/courses/:course_id'

DELETE
● Delete a specific course by ID : make a DELETE request to '/courses/:course_id'

:/carts
GET
Get all catrs: '/carts'

To use this project on your local machine, firstly: 
1.clone this repository.
3.install node modules by 'npm i' command.
4. Create a .env file in the root directory of the project.
5. create a heroku account and put credentials in .env file.
6. run scripts in the db folder of this project to create and poppulate database ("dbcreateCoursesTable", "dbpopulateCoursesTable":)
7. command:  npm start, npm run dev
8. enjoy!



If I had more time to work on this project, 
1 Validate all inputs sent through http requests as well as on react component level
2. I would like to add all relevant routes for the carts endpoint.
3. I would like to finish writing test for all the available routes
4. I would like to finish all the error handling
5. I would like to add extra layer of validation to both the http request and react form 
6. Build the UI and UX by adding more react components to Update a course, get all courses in ascending or descending order
