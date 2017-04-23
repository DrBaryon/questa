class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    @question.destroy
    redirect_to "/#/"
  end



  def create
    @question = current_user.questions.create!(question_params)
    @question.save
    render :show
  end

  def update
    @question = current_user.questions.find(params[:id])
    @question.update_attributes(question_params)
    render :show
  end


  private

  def question_params
    params.require(:question).permit(:title, :description, :upvotes)
  end


end
