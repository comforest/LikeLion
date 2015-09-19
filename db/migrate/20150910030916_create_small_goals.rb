class CreateSmallGoals < ActiveRecord::Migration
  def change
    create_table :small_goals do |t|
      t.string :title
      t.date :due
      t.integer :public_range
      t.boolean :favorite
      t.timestamps null: false
    end
  end
  
  
end
