# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

CSVReader.csv_read('./public/urls.csv').each do |url|
	if Url.exists?(:url => url[:url])
		puts "Url already exists"
	else
		Url.create! url	
	end
end

CSVReader.csv_read('./public/users2.csv').each do |ironhacker|
	if User.exists?(:email => ironhacker[:email])
		puts "User already exists"
	else
		User.create! ironhacker 	
	end
end

