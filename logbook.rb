require 'sinatra'
require 'sinatra/reloader'
require 'pry'

registered = false


get '/'do
	@name=params[:nickname]
	@registered=registered
	erb :plantilla

end

get '/registro' do

	erb :registro

end

post '/registro' do

	erb :plantilla

end

get '/login' do

	erb :login

end

post '/login' do
	
	@name=params[:nickname]
	@password=params[:pwd]
	if(@name == "usuario1" && @password == "password1")
		registered = true
		redirect '/'
	else
		erb :plantilla
	end
	
end

