class AddColumnToUsers < ActiveRecord::Migration
  def change
  	change_column :users, :screen, :integer, :default => 0
  end
end
