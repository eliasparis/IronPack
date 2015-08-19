class UsersController < ApplicationController
	
	before_action :require_login, except: :no_cookies
 
	def index
		unless current_user.screen === 0
			screen_controller
		else
			render 'index'
		end
		
	end

	def game_one
		unless current_user.screen === 1
			screen_controller
		else
			render 'play1'
		end
		
	end

	def game_two
		unless current_user.screen === 2
			screen_controller
		else
			render 'play2'
		end
		
	end

	def wins_update_screen
		@user = User.find_by(id: cookies[:user_id])
		@user.screen += 1
		@user.save
		screen_controller
	end

  	def no_cookies
		render 'intro'
	end

	private

	def screen_controller
  		if current_user.screen === 1
  			redirect_to play1_path
  		elsif current_user.screen === 2
  			redirect_to play2_path
  		elsif current_user.screen === 0
  			render 'index'
  		end
  	end
 
  	def require_login
	    unless cookies[:user_id]
	      redirect_to :action => 'no_cookies'
	    end
  	end
end
