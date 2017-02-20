class Api::QuestionsController < ApplicationController

  def index
    sleep 1
    @questions = Question.all
  end

  def show
    sleep 1
    @question = Question.find(params[:id])
  end



  def create
    debugger
    @question = current_user.questions.create!(question_params)
    render :index
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
