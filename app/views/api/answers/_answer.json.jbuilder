json.extract! answer, :id, :content
json.author do
  json.extract! answer.author, :first_name, :last_name, :id, :avatar_url
end
json.comments answer.comments do |comment|
  json.partial! "api/comments/comment", comment: comment
end
