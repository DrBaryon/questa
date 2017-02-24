class Follow < ActiveRecord::Base

  validates :user_id, :topic_id, presence: true

  belongs_to :user, foreign_key: :user_id
  belongs_to :topic, foreign_key: :topic_id

end
