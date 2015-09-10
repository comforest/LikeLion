class SmallGoal < ActiveRecord::Base
    has_and_belongs_to_many :big_goals, :join_table => "goal_parts"
    has_many :doplans
end
