json.extract! answer, :id, :content, :question_id
json.author do
  json.extract! answer.author, :first_name, :last_name, :id, :avatar_url
end
json.comments answer.comments do |comment|
  json.set! comment.id do
    json.partial! "api/comments/comment", comment: comment
  end
end
