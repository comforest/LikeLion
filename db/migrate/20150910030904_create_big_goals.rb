class CreateBigGoals < ActiveRecord::Migration
  def change
    create_table :big_goals do |t|
      t.string :content
      t.timestamps null: false
    end
    
  end
end
