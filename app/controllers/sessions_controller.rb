class SessionsController < ApplicationController

  def create
 		user = User.find_by(promocode: params[:promocode])
 		if user.nil?
 			redirect_to intro_path
 		else
 			cookies.permanent[:user_id] = user.id
 			redirect_to player_path
 		end
  end

end
