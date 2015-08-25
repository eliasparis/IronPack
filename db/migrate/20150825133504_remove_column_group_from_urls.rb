class RemoveColumnGroupFromUrls < ActiveRecord::Migration
  def change
  	remove_column :urls, :group, :integer	
  end
end
