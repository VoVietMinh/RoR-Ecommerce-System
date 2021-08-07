class Api::V1::UsersController < Api::ApiBaseController
  before_action :set_user, only: [:show, :edit, :destroy]

  def index
    @users = User.all()
    json_response(@users)
  end

  def create
    @user = User.create!(user_params)
    json_response(@users, :create)
  end

  def show
    json_response(@user)
  end

  def update
    @user = User.update(user_params)
    json_response(@user)
  end

  def destroy
    @todo.destroy
    head :no_content
  end

  def user_params
    params.permit(:name, :email)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
