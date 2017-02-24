class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :password_digest, :session_token,
    presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token, :ensure_avatar_url

  has_many :comments, foreign_key: :author_id
  has_many :questions, foreign_key: :author_id
  has_many :answers, class_name: "Answer", foreign_key: :author_id
  has_many :follows, foreign_key: :user_id
  has_many :favorite_topics, through: :follows, source: :topic

  def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return user if user && user.password_is?(password)
    nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

  def ensure_avatar_url
    self.avatar_url ||= "http://simplerev.com/wp-content/uploads/Generic-Avatar.jpg"
  end

	def new_session_token
		SecureRandom.urlsafe_base64
	end

end
