class UsersController < ApplicationController

    def index
        render 'login'
    end

    def show
        @user=User.find_by_name(params[:id])
        @user=User.all
        render 'logbook'
    end
end

