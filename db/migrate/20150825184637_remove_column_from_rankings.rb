class RemoveColumnFromRankings < ActiveRecord::Migration
  def change
  	remove_column :rankings, :user_id, :string
  end
end
