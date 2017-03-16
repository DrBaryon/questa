json.extract! comment, :id, :content, :commentable_id, :commentable_type
if comment.commentable_type == "Answer"
  json.question_id comment.commentable.question_id
end
json.author do
  json.extract! comment.author, :id, :first_name, :last_name, :avatar_url
end
if comment.comments.length > 0
  json.comments do
    comment.comments.each do |comment|
      json.set! comment.id do
        json.partial! "api/comments/comment", comment: comment
      end
    end
  end
else
  json.comments({})
end
