json.extract! comment, :id, :content, :commentable_id, :commentable_type, :upvotes
json.author do
  json.extract! comment.author, :id, :first_name, :last_name, :avatar_url
end
json.comments comment.comments do |comment|
  json.set! comment.id do
    json.partial! "api/comments/comment", comment: comment
  end
end
