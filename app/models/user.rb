class User < ApplicationRecord



    has_many :reviews
    #To see cars a user has reviewd please user User.first.cars_reviewed
    has_many :cars_reviewed, through: :reviews, source: :car

    
    has_secure_password

    # Sets up the relation ship for who owns a car instance and who photographed that car 
    # Note please call User.(whatever user).cars_owned to invoke this 
    has_many :cars_owned, class_name: "Car", foreign_key: "owned_by_id"
    has_many :photographs_taken, class_name: "Car", foreign_key: "photographed_by_id"

    validates :name, presence: true 
    validates :email, presence: true 
    validates :password_digest, presence: true 

  

end
