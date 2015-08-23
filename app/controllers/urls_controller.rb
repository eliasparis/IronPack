class UrlsController < ApplicationController

	def parse
		@urls = Url.all
		render json: @urls
	end

end
