class Api::AnswersController < ApplicationController

  def index
  end

  def create
    @answer = current_user.answers.create!(answer_params)
    render "api/answers/show"
  end

  def destroy
    @answer = current_user.answers.find(params[:id])
    @answer.destroy
    redirect_to "/#/#{@answer.question_id}"
  end

  private

  def answer_params
    params.require(:answer).permit(:question_id, :content)
  end
end
