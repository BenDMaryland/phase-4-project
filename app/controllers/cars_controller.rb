class CarsController < ApplicationController
    def index 
        render json: Car.all
    end

    def show 
        car = find_car
        render json: car
    end

    def create
        car = Car.create!(car_params)
        render json: car
    end

    def update
        car = find_car
        car.update!(car_params)
        render json: car
    end

 def destroy
    car = find_car
    car.destroy!
    head :no_content
  end
#, dependent: :destroy

    private 

    def find_car
        Car.find(params[:id])
    end

    def car_params
        params.permit(:owned_by_id, :photographed_by_id, :photo, :description, :model, :year)
    end

end
