class AddInfoMarkdown < ActiveRecord::Migration
  def change
    add_column :users, :mTitle, :string
    add_column :users, :markdown, :text
    add_column :users, :pageNumber, :integer
    add_column :users, :mDate, :datetime
  end
end
