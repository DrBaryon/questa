json.extract! user, :id, :first_name, :last_name, :email, :avatar_url
json.topics user.favorite_topics do |topic|
  json.extract! topic, :name, :id
end
