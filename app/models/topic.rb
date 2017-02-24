class Topic < ActiveRecord::Base

  validates :name, presence: true

  has_many :follows, foreign_key: :topic_id
  has_many :tags, foreign_key: :topic_id
  has_many :followers, through: :follows, source: :user
  has_many :tagged_questions, through: :tags, source: :question
end
