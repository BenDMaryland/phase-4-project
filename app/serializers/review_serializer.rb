class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :car_id, :user_id, :comment, :rating
end
