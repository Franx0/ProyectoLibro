class AddUserIdToMyworks < ActiveRecord::Migration
  def change
  	add_column :myworks, :user_id, :integer
  end
end
