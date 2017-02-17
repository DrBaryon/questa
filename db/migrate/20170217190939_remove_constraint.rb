class RemoveConstraint < ActiveRecord::Migration
  def change
    change_column :questions, :description, :string, :null => true
  end
end
