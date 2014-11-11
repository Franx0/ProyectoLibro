class NewFieldsTomyworks < ActiveRecord::Migration
  def change
    add_column :myworks, :mTitle, :string
    add_column :myworks, :markdown, :text
    add_column :myworks, :pageNumber, :integer
    add_column :myworks, :mDate, :datetime
    add_column :myworks, :pTitle, :string
    add_column :myworks, :picture, :binary
    add_column :myworks, :description, :text
    add_column :myworks, :pDate, :datetime
  end
end
