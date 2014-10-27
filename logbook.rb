require 'sinatra'
require 'sinatra/reloader'


get '/'do
	erb :plantilla
end

get '/registro.html' do
	erb :registro
end

get '/login.html' do
	erb :login
end

