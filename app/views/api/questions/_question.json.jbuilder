json.extract! question, :id, :title, :description
json.author do
  json.extract! question.author, :first_name, :last_name, :id, :avatar_url
end
