json.extract! @question, :id, :title, :description, :user
json.answers @question.answers, :id, :author_id, :content, :author
