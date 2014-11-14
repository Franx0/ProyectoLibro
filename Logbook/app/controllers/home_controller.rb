class HomeController < ApplicationController
  def index
   	if user_signed_in?
   		@mywork = current_user.myworks.new
   		render 'logbook'
   	else 
   	  render 'logbook'
		end
	end
end
