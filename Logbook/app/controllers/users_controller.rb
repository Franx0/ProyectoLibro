class UsersController < ApplicationController

    def index
        render 'login'
    end

    def show
        @users=User.all
        @user=@users.find_by_name(params[:id])
        render 'logbook'
    end
end

