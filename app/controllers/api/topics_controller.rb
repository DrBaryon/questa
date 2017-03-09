class Api::TopicsController < ApplicationController

  def show
    topic = Topic.find(params[:id])
    @questions = topic.questions.all
    render "api/questions/index"
  end

  def create
	end

	def destroy
	end

end
