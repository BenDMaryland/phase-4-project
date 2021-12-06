class ReviewsController < ApplicationController



   def index 
        render json: Review.all
    end

    def show 
        review = find_review
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = find_review
        review.destroy!
        head :no_content
    end


    private 

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:car_id, :user_id, :comment, :rating)
    end


end
