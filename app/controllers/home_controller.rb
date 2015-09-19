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
  
  def edit_doplan
    dp = Doplan.find(params[:gid])
    dp.content = params[:txt]
    dp.save
    render :text => ""
  end
  
  def rm_doplan
    dp = Doplan.find(params[:gid])
    dp.destroy
    render :text => ""
  end
  
  def add_goal
    bg = BigGoal.new
    bg.content = params[:content]
    bg.save
    
    render :text => ""
  end
  
  def click_modify
  end
  
  def click_delete
    
    @goal = BigGoal.find(params[:id])
    @goal.destroy
    redirect_to "/home/index"
  end
end
