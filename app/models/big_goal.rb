class BigGoal < ActiveRecord::Base
    has_many :goal_parts
    has_many :small_goals, :through => :goal_parts
end
