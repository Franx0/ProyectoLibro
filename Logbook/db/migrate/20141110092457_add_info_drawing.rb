class AddInfoDrawing < ActiveRecord::Migration
  def change
    add_column :users, :pTitle, :string
    add_column :users, :picture, :binary
    add_column :users, :description, :text
    add_column :users, :pDate, :datetime
  end
end
