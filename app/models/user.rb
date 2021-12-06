class User < ApplicationRecord
    has_many :reviews
    has_many :cars, through: :reviews 

    validates :name, presence: true 
    validates :email, presence: true 
    validates :password, presence: true 

end
