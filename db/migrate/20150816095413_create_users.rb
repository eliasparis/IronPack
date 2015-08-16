class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :promocode
      t.boolean :complete
      t.integer :screen

      t.timestamps null: false
    end
  end
end
