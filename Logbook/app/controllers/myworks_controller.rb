class MyworksController < ApplicationController
	before_action :authenticate_user!, only: :index

	def index
        @user = User.find_by(id: params[:id], id: current_user.id)
        if !@user
        	redirect_to login
        end
  end
end

