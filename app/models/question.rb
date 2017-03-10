class Question < ActiveRecord::Base

  validates :title, :author_id, presence: true

  belongs_to :author, class_name: "User", foreign_key: :author_id
  has_many :answers, foreign_key: :question_id
  has_many :tags, foreign_key: :question_id
  has_many :topics, through: :tags, source: :topic

  def bestAnswer
    return self.answers[0];
  end

  def bestTopic
    return self.topics[0];
  end

end
