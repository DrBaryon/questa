class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :topic_id, null: false

      t.timestamps null: false
    end
  end
end
