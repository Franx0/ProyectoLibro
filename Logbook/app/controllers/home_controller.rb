class HomeController < ApplicationController
before_action :authenticate_user!, only: :index
    def index
    		@mywork = current_user.myworks.new
     		render 'logbook'
    end
end
