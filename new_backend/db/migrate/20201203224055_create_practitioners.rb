class CreatePractitioners < ActiveRecord::Migration[6.0]
  def change
    create_table :practitioners do |t|
      t.string :name
      t.text :specialties
      t.string :about
      t.integer :zip_code
      t.text :languages
      t.string :image

      t.timestamps
    end
  end
end
