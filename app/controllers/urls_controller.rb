class UrlsController < ApplicationController
	
	skip_before_action :verify_authenticity_token,	only: [:points_refresh]

	def parse
		@urls = Url.all
		render json: @urls
	end

	def ranking
		@users_ranking = Ranking.get_users_rk(User.all)
		@users_sorted = Ranking.sorted_by_points(@users_ranking)

		@users_ranking_one = Ranking.get_users_rk_game_one(User.all)
		@users_sorted_one = Ranking.sorted_by_seconds(@users_ranking_one)

		@users_ranking_two = Ranking.get_users_rk_game_two(User.all)
		@users_sorted_two = Ranking.sorted_by_points(@users_ranking_two)

		@users_ranking_three = Ranking.get_users_rk_game_three(User.all)
		@users_sorted_three = Ranking.sorted_by_points(@users_ranking_three)

		render 'rankings'
	end

	def points_refresh
		Ranking.create(game: params[:game].to_i, points: params[:points].to_i, user_id: current_user.id)
	end

	private
	
end










