API Endpoints

HTML API

Root
Get /

JSON API

Users

POST /api/users
PATCH /api/users

Session

POST /api/session
DELETE /api/session

Questions

GET /api/questions
POST /api/questions
GET /api/questions/:id
PATCH /api/questions/:id
DELETE /api/questions/:id


Tags

POST /api/questions/:question_id/tags
  * add tag to question by name
DELETE /api/questions/:question_id/tags/:tag_name
  * remove tag from question by name
