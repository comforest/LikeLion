class GoalPart < ActiveRecord::Base
    belongs_to :big_goal
    belongs_to :small_goal
end
