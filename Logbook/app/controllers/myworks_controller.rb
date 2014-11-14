class MyworksController < ApplicationController
	before_action :authenticate_user!, only: :index

	def index
    @user = current_user
    @myworks = @user.myworks.all
  end

  def show
    @mywork = current_user.myworks.new
  end

  def new
    @user= User.find(params[:id])
    @mywork = current_user.myworks.new myworks_params
  end
  def destroy
    mywork = Mywork.destroy(params[:id])
    redirect_to myworks_path mywork.user
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

  def edit
    @user = current_user
    @mywork = Mywork.find(params[:id])
  end

  def update
    @mywork = Mywork.find(params[:id])
    if @mywork.update_attributes myworks_params
      redirect_to myworks_path(@mywork)
    end
  end

protected
  def myworks_params
    params.require(:mywork).permit(:markdown, :mTitle, :mDate)
  end
end

