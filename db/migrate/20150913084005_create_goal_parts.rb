class CreateGoalParts < ActiveRecord::Migration
  def change
    create_table :goal_parts do |t|
      t.integer :big_goal_id
      t.integer :small_goal_id

      t.timestamps null: false
    end
  end
end
