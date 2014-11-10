# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
estela=User.create(
    name: 'Estela',
    surname: 'Pedrero',
    birthdate: '02/01/87',
    mail: 'estelaesguay@gmail.com',
    nickname: 'estela',
    password: '123456'
    )
