class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.integer :owner_id
      t.integer :photographer_id
      t.string :photo
      t.string :description
      t.string :model
      t.integer :year

      t.timestamps
    end
  end
end
