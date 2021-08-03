class HomeController < ApplicationController
  skip_before_action :authenticate_request 
  def index
    user_authen = User.authenicate('admin@demo', 'b')
  end
end
