class HomeController < ApplicationController
  def index
    @sg = SmallGoal.all
  end
  
end
