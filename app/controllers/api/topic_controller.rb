class Api::TopicController < ApplicationController

  def show
    @topic = Topic.find(params[:id])
    render "api/topics/show"
  end

end
