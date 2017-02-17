class Question < ActiveRecord::Base

  validates :title, :author_id, presence: true

  belongs_to :user, foreign_key: :author_id
  has_many :answers, foreign_key: :question_id
  has_many :tags, foreign_key: :question_id
  has_many :topics, through: :tags, source: :topic

end
