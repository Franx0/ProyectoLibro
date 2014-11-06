require 'sinatra'
require 'sinatra/base'
require 'sinatra/session'


class Logbook < Sinatra::Base
	register Sinatra::session


end


Logbook.new(name,surname,birthdate,email,repeatemail,user,pwd,repeatpwd)
