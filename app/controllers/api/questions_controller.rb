class Api::QuestionsController < ApplicationController

  def index
  end

  def show
  end



  def create
    @question = Question.create!(question_params, author_id: current_user.id)
    render :show
  end

  def update
    @question = Question.find(params[:id])
    @question.update_attributes(question_params)
    render :show
  end


  private

  def question_params
    params.require(:question).permit(:title, :description)
  end

end
