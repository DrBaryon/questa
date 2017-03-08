json.extract! question, :id, :title, :description, :author

# json.answers question.answers do |answer|
#   json.extract! answer, :id, :author_id, :content, :author, :comments
#   json.comments answer.comments do |comment|
#     json.partial! "api/comments/comment", comment: comment
#   end
# end
