json.partial! "api/questions/question", question: @question
json.answers @question.answers do |answer|
  json.set! answer.id do
    json.partial! "api/answers/answer", answer: answer
  end
end
json.topics @question.topics do |topic|
  json.set! topic.id do
    json.partial! "api/topics/topic", topic: topic
  end
end
