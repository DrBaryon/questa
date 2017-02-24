class Api::UsersController < ApplicationController

  def create

    @user = User.new(user_params)
    @user.avatar_url = "http://simplerev.com/wp-content/uploads/Generic-Avatar.jpg"
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
  end

  def update
  end

  private

	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :password, :avatar_url)
	end

end
