class UsersController < ApplicationController
	
	before_action :require_login, except: :no_cookies
 
	def index
		render 'index'
	end

	def play1
		@user = User.find_by(id: cookies[:user_id])
		@user.screen = 1
		@user.save
		render 'play1'
	end

	def no_cookies
		render 'intro'
	end

	private
 
  	def require_login
	    unless cookies[:user_id]
	      redirect_to :action => 'no_cookies'
	    end
  	end
end
