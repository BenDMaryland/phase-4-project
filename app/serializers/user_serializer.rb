class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :photographer,  :cars_owned, :photographs_taken 

  has_many :reviews 
  # has_many :cars 



end
