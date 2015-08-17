module SessionsHelper
  def current_user
    @current_user ||= User.find_by(id: cookies[:user_id])
  end

end
