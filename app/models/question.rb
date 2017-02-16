class Question < ActiveRecord::Base

  validates :title, :description, :author_id, presence: true
  belongs_to :user, foreign_key :author_id
  has_many :answers, foreign_key :question_id

end
