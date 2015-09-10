class CreateDoplans < ActiveRecord::Migration
  def change
    create_table :doplans do |t|
      t.integer :small_goal_id
      t.string :content
      t.boolean :check
      t.timestamps null: false
    end
  end
end
