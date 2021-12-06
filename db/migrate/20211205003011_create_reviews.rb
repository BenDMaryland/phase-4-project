class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :car_id 
      t.integer :user_id
      t.string :comment
      t.integer :rating

      t.timestamps
    end
  end
end
