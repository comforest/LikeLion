class HomeController < ApplicationController
  def index
    @bg = BigGoal.all
    @sg = SmallGoal.all
  end
  
  def writegoal
  end
  
  def add_doplan
    dp = Doplan.new
    dp.small_goal_id = params[:sgid]
    dp.content = params[:content]
    dp.check = false
    dp.save
    
    render :text => ""
  end
  
  def add_goal
    bg = BigGoal.new
    bg.content = params[:content]
    bg.save
    
    render :text => ""
  end
end
