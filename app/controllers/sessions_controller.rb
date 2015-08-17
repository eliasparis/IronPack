class SessionsController < ApplicationController

  def create
 		user = User.find_by(promocode: params[:promocode])
 		cookies.permanent[:user_id] = user.id
 		redirect_to player_path
  end

end
