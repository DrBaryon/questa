class Api::AnswersController < ApplicationController

  def create
    @answer = current_user.answers.create!(answer_params)
    render "api/answers/show"
  end

  def destroy
    @answer = current_user.answers.find(params[:id])
    @answer.delete
    render "api/answers/show"
  end

  private

  def answer_params
    params.require(:answer).permit(:question_id, :content)
  end
end
