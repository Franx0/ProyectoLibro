require 'sinatra'
require 'sinatra/reloader'
require 'pry'

<<<<<<< HEAD
=======
registered=true
>>>>>>> 47d2731ee81e288d8957463d63c04c5a75936b39

get '/'do

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
			puts 'lakaka'
		registered = true
		redirect '/'
	else
		erb :login
	end

end

