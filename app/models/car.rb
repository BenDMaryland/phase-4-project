class Car < ApplicationRecord
   
  # sets up relationship for cars owned by a user  Please use this format. Car.first.owned_by , this will tell you who oens the first car 
    belongs_to :owned_by, class_name: "User", foreign_key: "owned_by_id"
    belongs_to :photographed_by, class_name: "User", foreign_key: "photographed_by_id", optional: true



    has_many :reviews
    ## To see the users who reviewed a car you must user User.first.reviewed_by
    has_many :reviewed_by, through: :reviews, source: :user

    validates :description, presence: true 
    validates :model, presence: true 
    validates :year, presence: true 



    def average_score
    self.reviews.average( :rating).to_i
    end

    def total_reviews
      self.reviews.count
    end

    
end
