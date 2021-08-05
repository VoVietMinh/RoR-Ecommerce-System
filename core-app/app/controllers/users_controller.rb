class UsersController < ApplicationController

  def index
    render json: {data: User.all()}
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
