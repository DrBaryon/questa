json.extract! comment, :id, :content, :commentable_id, :commentable_type
json.parent do
  if comment.commentable_type == "Answer"
    json.partial! "api/answers/answer", answer: comment.commentable
  else
    json.partial! "api/comments/comment", comment: comment.commentable
  end
end
json.author do
  json.extract! comment.author, :id, :first_name, :last_name, :avatar_url
end
json.comments do
  comment.comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end
