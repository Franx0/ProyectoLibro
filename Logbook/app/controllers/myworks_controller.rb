class MyworksController < ApplicationController

	def index
    	  @users=User.all
        @user=@users.find_by_name(params[:id])
  end
end
