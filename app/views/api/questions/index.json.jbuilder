@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :title, :description
    json.author do
      json.extract! question.author, :first_name, :last_name, :id, :avatar_url
    end
    if question.bestAnswer
      json.bestAnswer do
        json.partial! "api/answers/answer", answer: question.bestAnswer
      end
    end
  end
end
