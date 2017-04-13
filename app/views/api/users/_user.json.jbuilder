json.extract! user, :id, :first_name, :last_name, :email, :avatar_url
if user.favorite_topics.length > 0
  json.topics do
    user.favorite_topics.each do |topic|
      json.set! topic.id do
        json.extract! topic, :name, :id
      end
    end
  end
else
  json.topics({})
end
