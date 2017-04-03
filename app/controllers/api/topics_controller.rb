class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.where("name LIKE ?", "%#{params[:searchTerm]}%")
  end

  def show
    @topic = Topic.find(params[:id])
    render "api/topics/show"
  end

end
