json.extract! comment, :id, :content
json.author do
  json.extract! comment.author, :id, :first_name, :last_name, :avatar_url
end
json.commentable do
  json.extract! comment.commentable, :id
end
