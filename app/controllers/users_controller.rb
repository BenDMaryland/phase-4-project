class UsersController < ApplicationController




      def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def show 
        user = User.find(session[:user_id])
        render json: user 
    end

  



    private 

    def user_params
        params.permit(:name, :password, :email, :photographer )

    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end





end
