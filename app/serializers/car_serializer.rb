class CarSerializer < ActiveModel::Serializer
  attributes :id, :owned_by, :photographed_by, :photo, :description, :model, :year, :average_score

  has_many :reviews
end
