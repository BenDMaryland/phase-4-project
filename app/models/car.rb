class Car < ApplicationRecord
    has_many :reviews 
    has_many :users, through: :reviews

belongs_to :owned_by, class_name: "User", foreign_key: "owned_by_id"
belongs_to :photographed_by, class_name: "User", foreign_key: "photographed_by_id", optional: true


    validates :photo, presence: true 
    validates :description, presence: true 
    validates :model, presence: true 
    validates :year, presence: true 


end
