class UsersController < ApplicationController
	before_action :authenticate_user!, only: :show
	
    def index
        render 'home/logbook'
    end

end

