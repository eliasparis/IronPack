class ChangeColumnToUsers < ActiveRecord::Migration
  def change
  	change_column :users, :complete, :boolean, :default => false
  end
end
