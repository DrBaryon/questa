class Api::AnswersController < ApplicationController

  def index
  end

  def create
    @answer = current_user.answers.create!(answer_params)
    @answer.upvotes = 0;
    render "api/answers/show"
  end

  def destroy
  end

  private

  def answer_params
    params.require(:answer).permit(:question_id, :content, :upvotes)
  end
end
