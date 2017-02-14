
users
|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|username	      |string	  |not null, indexed, unique|
|email	        |string	  |not null, indexed, unique|
|password_digest|string	  |not null                 |
|session_token	|string	  |not null, indexed, unique|


questions
|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|title          |string   |not null, indexed, unique|
|author_id      |integer  |not null, foreign key    |

answers
|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|question_id    |integer  |not null, foreign key    |
|author_id      |integer  |not null, foreign key    |
|content        |string   |not null                 |

comments
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|commentable_id |integer  |not null, foreign key    |
|author_id      |integer  |not null, foreign key    |
|content        |string   |not null                 |

taggings
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|question_id    |integer  |not null, foreign key    |
|topic_id       |integer  |not null, foreign key    |

topics
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|topic_name     |string   |not null                 |
