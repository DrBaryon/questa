json.partial! "api/topics/topic", topic: @topic
json.questions @topic.tagged_questions do |question|
  json.extract! question, :id, :title, :description
  json.author do
    json.extract! question.author, :first_name, :last_name, :id, :avatar_url
  end
  json.bestAnswer do
    json.partial! "api/answers/answer", answer: question.bestAnswer
  end
end
