class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :car_id, :user_id, :comment, :rating , :name
 
  def name
   self.object.user.name
  end
  
  belongs_to :car
end
