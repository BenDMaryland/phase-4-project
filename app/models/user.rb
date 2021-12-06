class User < ApplicationRecord
    has_many :reviews
    has_many :cars, through: :reviews 

has_many :cars_owned, class_name: "Car", foreign_key: "owned_by_id"
has_many :photographs_taken, class_name: "Car", foreign_key: "photographed_by_id"



    validates :name, presence: true 
    validates :email, presence: true 
    validates :password, presence: true 

end
