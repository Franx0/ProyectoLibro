class MyworksController < ApplicationController
	before_action :authenticate_user!, only: :index

	def index 
    @mywork = current_user.myworks.new
  end

  def show
    @mywork = current_user.myworks.new
  end

  def new
    @user= User.find(params[:id])
    @mywork = current_user.myworks.new myworks_params
  end

  def create
    @user= User.find(params[:user_id])
    @mywork = current_user.myworks.new myworks_params

  if @mywork.save
    redirect_to myworks_path
  else
    render 'logbook'
  end
  end

protected
  def myworks_params
    params.require(:mywork).permit(:markdown, :mTitle, :mDate)
  end
end

