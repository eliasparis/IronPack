class AddColumnToRankings < ActiveRecord::Migration
  def change
  	add_column :rankings, :user_id, :integer
  end
end
