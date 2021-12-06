class Car < ApplicationRecord
    has_many :reviews 
    has_many :users, through: :reviews

    validates :photo, presence: true 
    validates :description, presence: true 
    validates :model, presence: true 
    validates :year, presence: true 


end
