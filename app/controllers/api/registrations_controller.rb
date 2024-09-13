module Api
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      def create
        build_resource(sign_up_params)
  
        if resource.save
          if resource.active_for_authentication?
            render json: resource, status: :created
          else
            expire_data_after_sign_in!
            render json: { message: "signed_up_but_inactive" }, status: :created
          end
        else
          render json: resource.errors, status: :unprocessable_entity
        end
      end
  
      private
  
      def sign_up_params
        params.require(:registration).permit(:email, :password, :password_confirmation)
      end
    end
  end
  