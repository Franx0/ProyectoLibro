class RemoveClass < ActiveRecord::Migration
  def change
  	remove_column :myworks, :class
  end
end
