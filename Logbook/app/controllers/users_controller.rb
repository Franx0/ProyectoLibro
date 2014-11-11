class UsersController < ApplicationController
	before_action :authenticate_user!, only: :show
    def index
        render 'home/logbook'
    end

    def show
        @users=User.all
        @user=@users.find_by_name(params[:id])
        render 'home/logbook'
    end
end

