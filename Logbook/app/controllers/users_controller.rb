class UsersController < ApplicationController
	before_action :authenticate_user!, only: :show
	
    def index
    	@user = User.find_by_name(params[:id])
        render 'home/logbook'
    end

    def update
    	render 'edit'
    end
end