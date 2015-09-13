class HomeController < ApplicationController
  def index
    @bg = BigGoal.all
    @sg = SmallGoal.all
  end
  
  def writegoal
  end
end
