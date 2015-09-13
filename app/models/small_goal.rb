class SmallGoal < ActiveRecord::Base
    has_many :goal_parts
    has_many :big_goals, :through => :goal_parts
    has_many :doplans
end
