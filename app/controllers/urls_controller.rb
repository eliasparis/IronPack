class UrlsController < ApplicationController
	
	skip_before_action :verify_authenticity_token,	only: [:points_refresh]

	def parse
		@urls = Url.all
		render json: @urls
	end

	def ranking
		@users_with_rk = User.where(complete: 'true')
		@users_sorted = @users_with_rk.sort_by{|object| object[:points]}.reverse
		render 'rankings'
	end

	def points_refresh
			Ranking.create(user_id: current_user.id, game: params[:game].to_i, points: params[:points].to_i)
	end

	private
	
end
