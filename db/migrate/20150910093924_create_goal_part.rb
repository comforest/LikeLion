class CreateGoalPart < ActiveRecord::Migration
  def self.up
    create_table :goal_parts do |t|
      t.integer :big_goal_id
      t.integer :small_goal_id
    end
    
    add_index :goal_parts, [:big_goal_id, :small_goal_id]
  end
  
  def self.down
    drop_table :goal_parts
  end
  
end
