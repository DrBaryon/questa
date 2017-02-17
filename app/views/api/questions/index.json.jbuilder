
@questions.each do |question|
  json.set! question.id do
    json.extract! question, :title, :description, :user, :answers
  end
end
