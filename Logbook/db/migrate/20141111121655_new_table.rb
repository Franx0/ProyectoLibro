class NewTable < ActiveRecord::Migration
  def change
    remove_column :users, :mTitle
    remove_column :users, :markdown
    remove_column :users, :pageNumber
    remove_column :users, :mDate
    remove_column :users, :pTitle
    remove_column :users, :picture
    remove_column :users, :description
    remove_column :users, :pDate
  end
end
