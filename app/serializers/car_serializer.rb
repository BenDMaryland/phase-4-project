class CarSerializer < ActiveModel::Serializer
  attributes :id, :owned_by, :photographed_by, :photo, :description, :model, :year, :average_score, :total_reviews

  has_many :reviews
end
