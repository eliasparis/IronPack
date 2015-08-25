class User < ActiveRecord::Base
	before_create :promocode_string
	belongs_to :ranking
	
	validates :name, presence: true
	validates :email, presence: true
	#validates :promocode, length: { is: 8 }, uniqueness: true

	private
		NUM = ("a".."z").to_a.join + ("A".."Z").to_a.join + (0..9).to_a.join
		
		def promocode_string
			self.promocode = promocode_number
		end

		def promocode_number
			i = ""
			8.times do 
				i += NUM[Random.rand(NUM.length)]
			end
			i
		end
	
end
