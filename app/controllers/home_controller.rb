class HomeController < ApplicationController
  def index
    @bg = BigGoal.all
    @sg = SmallGoal.all
  end
  
  def writegoal
  end
  
  def add_goal
    @bg = BigGoal.new
    @bg.content = params[:content]
    @bg.save
    
    
    render :text => ""
    
  end
end
