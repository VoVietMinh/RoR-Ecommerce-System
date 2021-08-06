class Api::V1::UsersController < Api::ApiBaseController

  def index
    users = User.all()
    render json: {
      success: true,
      data: users
    }
  end

  def new
    
  end

  def create
  end

  def show
    user = User.find params[:id]
    render json: {
      success: true,
      data: user
    }
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
