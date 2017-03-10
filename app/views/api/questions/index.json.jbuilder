@questions.each do |question|
  json.set! question.id do
    json.partial! "api/questions/question", question: question
    if question.bestAnswer
      json.bestAnswer do
        json.partial! "api/answers/answer", answer: question.bestAnswer
      end
    end
    if question.bestTopic
      json.bestTopic do
        json.partial! "api/topics/topic", topic: question.bestTopic
      end
    end
  end
end
