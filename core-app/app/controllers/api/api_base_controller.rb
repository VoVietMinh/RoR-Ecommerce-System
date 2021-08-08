class Api::ApiBaseController < ActionController::API
  include Response
  include ExceptionHandler
  before_action :authenticate_request
  attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: "Not Authorized" }, status: 401 unless @current_user
  end

  def paging_params
    { page: params[:page], per_page: params[:per_page] || 20 }
  end
end
