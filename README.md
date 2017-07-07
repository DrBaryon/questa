# Questa

[Live Link](http://www.questa.pro)

![home]

## Summary

Questa is a Q&A web application inspired by popular Q&A forum Quora and built using Ruby on Rails and React.js/flux architecture. Questa allows users to: 

* Create an account
* Log in and out
* View questions on their main feed along with a preview of one of the answers.
* Ask new questions
* View answers to questions
* Add their own answers
* View comments on answers
* Add their own comments to answers
* View existing questions by topic.
* Search topics and edit a list of their favorite topics.
* View topic pages displaying only those questions tagged with a given topic.

## Structure

#### Backend

The app was built using Ruby on Rails on the backend with a postgreSQL database. The app makes use of RESTful routes and
requests to the database are handled using AJAX queries. The responses are rendered as JSON objects using JBuilder to specify
the precise structure of the output.

#### Frontend

The front end is built completely in React.js and uses React's Flux architecture. Modals use conditional rendering of React
components rather than manipulation of CSS display properties. This approach reduces queries to the database to their absolute
minimum.

## Primary Components

#### User Auth
Questa uses BCrypt within Rails to hash passwords and save the resulting password digests to the database. To check a user's password
the user's input is hashed and compared against the database's password digest.

![auth]

#### Query Bar
Questa's query bar at the top of each page pulls double duty as a search tool and a user input form. A user can
type their question and the app will filter the questions in the database and render links to those which include the user's query.
Should the user not find what they're looking for, clicking the "Just do it!" button will create a new question and add it to the database.

![query]

#### Question Feeds
Questa's homepage is a default question feed showing all questions in the database, with links to their question page and any relevant topic pages.
Should a user want to look at all questions within a certain topic, they can link to a topic page with a feed that only contains
questions pertaining to that topic.

#### Question Pages
Individual question pages display the question and all answers. Users can add their own answers and comment on the answers of
others. Using Flux architecture new answers and comments are added to the page seamlessly without need for a new AJAX query.

![answerform]

#### Topic Search
Each user is associated in the Rails database with some number of topics through their "follows." These favorite topics are
rendered on the left sidebar as links to their topic pages. This favorites list can be dynamically edited, by searching
the topic list by topic name or deleting topics from the list. Edits show up immediately on the frontend through updates to 
the store, while posting to the backend for sake of permanence. 

![topicsearch]

[home]: ./app/assets/images/homepage.png
[auth]: ./app/assets/images/auth.png
[query]: ./app/assets/images/query.png
[topicsearch]: ./app/assets/images/topicsearch.png
[answerform]: ./app/assets/images/answerform.png

