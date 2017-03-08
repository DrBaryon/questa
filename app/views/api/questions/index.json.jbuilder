@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :title, :description
    json.author do
      json.extract! question.author, :first_name, :last_name, :id, :avatar_url
    end
    json.bestAnswer do
      json.partial! "api/answers/answer", answer: question.bestAnswer
    end

    # json.extract! bestAnswer, :id, :content, :author, :comments
    # json.extract! bestAnswer.author, :first_name, :last_name, :id, :avatar_url
    # json.comments bestAnswer.comments do |comment|
    #   json.partial! "api/comments/comment", comment: comment
    # end
  end
end
