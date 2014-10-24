require 'sinatra'
require 'sinatra/reloader'


get '/'do
	erb :plantilla
end

get '/login' do
	erb :login
end