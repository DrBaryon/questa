class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.create!(comment_params)
    @comment.upvotes = 0;
    render "api/comments/show"
  end

  private

  def comment_params
    params.require(:comment).permit(:commentable_id, :commentable_type,
      :content, :upvotes)
  end

end
