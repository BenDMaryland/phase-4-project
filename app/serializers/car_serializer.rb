class CarSerializer < ActiveModel::Serializer
  attributes :id, :owned_by, :photographed_by, :photo, :description, :model, :year, :favorite, :average_score, :total_reviews, :favorite_car

  has_many :reviews
end
