
users
|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|email	        |string	  |not null, indexed, unique|
|password_digest|string	  |not null                 |
|session_token	|string	  |not null, indexed, unique|


questions
|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|title          |string   |not null, indexed, unique|
|description    |text     |not null, unique         |
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

tags
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|question_id    |integer  |not null, foreign key    |
|topic_id       |integer  |not null, foreign key    |

topics
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|name           |string   |not null                 |
