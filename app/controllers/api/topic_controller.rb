class Api::TopicController < ApplicationController

  def index
    @topics =Topic.all
  end

  def show
    @topic = Topic.find(params[:id])
    render "api/topics/show"
  end

end
