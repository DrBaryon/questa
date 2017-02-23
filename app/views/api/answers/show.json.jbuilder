json.extract! @answer, :id, :content
json.question do
  json.extract! @answer.question, :id
end
json.author do
  json.extract! @answer.author, :first_name, :last_name, :id, :avatar_url
end
