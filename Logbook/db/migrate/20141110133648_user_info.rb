class UserInfo < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :surname, :string
    add_column :users, :birthdate, :string
    add_column :users, :mail, :string
    add_column :users, :nickname, :string
    add_column :users, :password, :string
  end
end
