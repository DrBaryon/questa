@questions.each do |question|
  json.set! question.id do
    json.partial! 'question', question: question
    json.set! :bestAnswer, :answers
  end
end
