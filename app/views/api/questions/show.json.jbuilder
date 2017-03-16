json.partial! "api/questions/question", question: @question
if @question.answers.length > 0
  json.answers do
    @question.answers.each do |answer|
      json.set! answer.id do
        json.partial! "api/answers/answer", answer: answer
      end
    end
  end
else
  json.answers({})
end
if @question.topics.length > 0
  json.topics do
    @question.topics.each do |topic|
      json.set! topic.id do
        json.partial! "api/topics/topic", topic: topic
      end
    end
  end
else
  json.topics({})
end
