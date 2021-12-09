class AddFavoriteToCars < ActiveRecord::Migration[6.1]
  def change
    add_column :cars, :favorite, :boolean
  end
end
