class CarSerializer < ActiveModel::Serializer
  attributes :id, :owned_by, :photographed_by, :photo, :description, :model, :year

  has_many :reviews
end
