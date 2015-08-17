class UsersController < ApplicationController
	def index
		render 'index'
	end

	def play1
		@mal = User.find(1)
		render 'play'
	end
		
	

	
end
