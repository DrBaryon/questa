class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :question_id, null: false, index: true
      t.integer :topic_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
