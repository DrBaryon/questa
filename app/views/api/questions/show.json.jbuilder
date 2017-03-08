json.partial! "api/questions/question", question: @question
json.answers @question.answers do |answer|
  json.partial! "api/answers/answer", answer: answer
end
