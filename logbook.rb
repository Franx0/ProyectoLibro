require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/session'
require 'pry'

enable :sessions
set :session_fail, '/login'
set :session_secret, 'So0perSeKr3t!'

registered = false


get '/'do

	session!

	@name=params[:nickname]
	@registered=registered


	@registered=registered
	@name=params[:nickname]

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

