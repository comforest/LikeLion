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
  
  
  def checking
    dp = Doplan.find(params[:gid])
    dp.check = params[:checked]
    dp.save
    render :text => ""
  end
  
  def add_goal
    bg = BigGoal.new
    bg.content = params[:content]
    bg.save
    
    render :text => ""
  end
  
  def click_modify
    bg = BigGoal.find(params[:bid])
    bg.content = params[:content]
    bg.save
    render :text => ""
  end
  
  def click_delete
    
    bg = BigGoal.find(params[:id])
    bg.destroy
    render :text => ""
  end
end
