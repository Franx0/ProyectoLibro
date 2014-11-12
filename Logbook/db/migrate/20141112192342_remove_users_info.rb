class RemoveUsersInfo < ActiveRecord::Migration
  def change
  	remove_column :users, :password
  	remove_column :users, :mail
  end
end
