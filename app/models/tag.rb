class Tag < ActiveRecord::Base

  validates :question_id, :topic_id, presence: true

  belongs_to :question, foreign_key: :question_id
  belongs_to :topic, foreign_key: :topic_id

end
