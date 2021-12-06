class CarSerializer < ActiveModel::Serializer
  attributes :id, :owned_by_id, :photographed_by_id, :photo, :description, :model, :year
end
