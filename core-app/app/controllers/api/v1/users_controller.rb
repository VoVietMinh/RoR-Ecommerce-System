class Api::V1::UsersController < Api::ApiBaseController
  before_action :set_user, only: [:show, :edit, :destroy]

  def index
    @users = User.where(nil)
    filtering_params().each do |key, value|
      @users = @users.public_send("filter_by_#{key}", value) if value.present?
    end

    @users = @users.paginate(paging_params)
    paginate @users, per_page: paging_params[:per_page]
  end

  def create
    @user = User.create(user_params)
    json_response(@user, :created)
  end

  def show
    json_response(@user)
  end

  def update
    @user = User.update(user_params)
    head :no_content
  end

  def destroy
    @user.destroy
    head :no_content
  end

  def filtering_params
    params.slice(:name, :email)
  end

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
