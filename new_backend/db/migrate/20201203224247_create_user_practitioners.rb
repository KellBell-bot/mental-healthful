class CreateUserPractitioners < ActiveRecord::Migration[6.0]
  def change
    create_table :user_practitioners do |t|
      t.references :user, null: false, foreign_key: true
      t.references :practitioner, null: false, foreign_key: true
      t.text :review
      t.integer :likes

      t.timestamps
    end
  end
end
