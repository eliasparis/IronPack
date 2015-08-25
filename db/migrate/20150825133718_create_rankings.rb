class CreateRankings < ActiveRecord::Migration
  def change
    create_table :rankings do |t|
    	t.string :user_id
    	t.integer :game
    	t.integer :points
      t.timestamps null: false
    end
  end
end
