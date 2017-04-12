class Api::FollowsController < ApplicationController

  def create
    @follow = current_user.follows.create!(follow_params)
    @follow.save
    render "api/follows/show"
  end

  def destroy
    @follow = current_user.follows.find_by_topic_id(params[:id])
    @follow.destroy
    render "api/follows/show"
  end

  private

  def follow_params
    params.require(:follow).permit(:topic_id)
  end

end
