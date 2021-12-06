class CarSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :photographer_id, :photo, :description, :model, :year
end
