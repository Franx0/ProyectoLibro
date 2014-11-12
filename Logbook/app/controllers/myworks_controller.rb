class MyworksController < ApplicationController
	before_action :authenticate_user!, only: :index

	def index
        @user = User.find_by_name(params[:id])
        if current_user.id != @user.name
        	redirect_to 'home/logbook'
        end
    end

end
