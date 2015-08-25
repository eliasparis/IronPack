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
		unless current_user.screen === 1 || user_complete_games
			screen_controller
		else
			render 'play1'
		end
	end

	def game_two
		unless current_user.screen === 2 || user_complete_games
			screen_controller
		else
			render 'play2'
		end
	end

	def congrats
		unless user_complete_games
			screen_controller
		else
			render 'congrats'
		end
	end

	def wins_update_screen
		@user = User.find_by(id: cookies[:user_id])
		@user.screen += 1
		
		if @user.screen > 2
			@user.complete = true
			@user.screen = 3
		end 

		@user.save
			
		screen_controller
	end

  	def no_cookies
		render 'intro'
	end

	private

	def user_complete_games
		current_user.complete === true
	end

	def screen_controller
  		if current_user.screen === 0
  			redirect_to action: :index
  		elsif current_user.screen === 1
  			redirect_to play1_path
  		elsif current_user.screen === 2
  			redirect_to play2_path
  		elsif current_user.complete === true && current_user.screen > 2
  			redirect_to congrats_path
  		end
  	end
 
  	def require_login
	    unless cookies[:user_id]
	      redirect_to :action => 'no_cookies'
	    end
  	end

end
