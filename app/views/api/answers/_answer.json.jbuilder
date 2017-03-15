json.extract! answer, :id, :content, :question_id
json.author do
  json.extract! answer.author, :id, :first_name, :last_name, :avatar_url
end
json.comments do
  answer.comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end
