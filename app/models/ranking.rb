class Ranking < ActiveRecord::Base
	has_many :users

	def self.sorted_by_points(array)
		return array.sort_by{|object| object[:points]}.reverse
	end

	def self.sorted_by_seconds(array)
		return array.sort_by{|object| object[:points]}
	end

	def self.get_users_rk_game_one(users)
		final_ranking_no_sorted_one = []
		x = 0 

		while x < users.length do

			if users[x].complete? 
				final_points = (points_game_one(users[x].id))*-1
				user_name = users[x].name
				id = users[x].id
				user_and_points = {points: final_points, name: user_name, id: id }
				final_ranking_no_sorted_one.push(user_and_points)
			else
			end
			x+=1
		end
		return final_ranking_no_sorted_one
	end

	def self.get_users_rk_game_two(users)
		final_ranking_no_sorted_two = []
		x = 0 

		while x < users.length do

			if users[x].complete? 
				final_points = points_game_two(users[x].id)
				user_name = users[x].name
				id = users[x].id
				user_and_points = {points: final_points, name: user_name, id: id }
				final_ranking_no_sorted_two.push(user_and_points)
			else
			end
			x+=1
		end
		return final_ranking_no_sorted_two
	end

	def self.get_users_rk_game_three(users)
		final_ranking_no_sorted_three = []
		x = 0 

		while x < users.length do

			if users[x].complete? 
				final_points = points_game_three(users[x].id)
				user_name = users[x].name
				id = users[x].id
				user_and_points = {points: final_points, name: user_name, id: id }
				final_ranking_no_sorted_three.push(user_and_points)
			else
			end
			x+=1
		end
		return final_ranking_no_sorted_three
	end

	def self.get_users_rk(users)
		final_ranking_no_sorted = []
		users.each do |user|

			if user.complete? 
				final_points = points_game_one(user.id) + points_game_two(user.id) + points_game_three(user.id)
				user_name = user.name
				id = user.id
				user_and_points = {points: final_points, name: user_name, id: id }
				final_ranking_no_sorted.push(user_and_points)
			else
			end
		end
		return final_ranking_no_sorted
	end

	def self.points_game_one(x)
		points1 = []
		results1 = Ranking.where(user_id: x, game: 1)
		results1.each do |num|
			points1.push(num.points)		 	
		end
		points1.max || 0
	end

	def self.points_game_two(x)
		points2 = []
		results2 = Ranking.where(user_id: x, game: 2)
		results2.each do |num|
			points2.push(num.points)		 	
		end
		points2.max || 0
	end

	def self.points_game_three(x)
		points3 = []
		results3 = Ranking.where(user_id: x, game: 3)
		results3.each do |num|
			points3.push(num.points)		 	
		end
		points3.max || 0
	end

end
