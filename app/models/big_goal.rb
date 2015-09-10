class BigGoal < ActiveRecord::Base
    has_and_belongs_to_many :small_goals, :join_table => "goal_parts"
end
