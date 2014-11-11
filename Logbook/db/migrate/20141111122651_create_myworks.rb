class CreateMyworks < ActiveRecord::Migration
  def change
    create_table :myworks do |t|
    t.timestamps
    end
  end
end
