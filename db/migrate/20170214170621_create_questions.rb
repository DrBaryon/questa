class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false, unique: true, index: true
      t.text :description, null: false
      t.integer :author_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
