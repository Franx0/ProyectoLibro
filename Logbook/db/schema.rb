# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141110133648) do

  create_table "homes", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "mTitle"
    t.text     "markdown"
    t.integer  "pageNumber"
    t.datetime "mDate"
    t.string   "pTitle"
    t.binary   "picture"
    t.text     "description"
    t.datetime "pDate"
    t.string   "name"
    t.string   "surname"
    t.string   "birthdate"
    t.string   "mail"
    t.string   "nickname"
    t.string   "password"
  end

end
