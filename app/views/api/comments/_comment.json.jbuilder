json.extract! comment, :id, :content, :commentable_id
json.author do
  json.extract! comment.author, :id, :first_name, :last_name, :avatar_url
end
json.comments comment.comments do |comment|
  json.partial! "api/comments/comment", comment: comment
end
