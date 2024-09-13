class Api::SessionsController < ApiController

  def create
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password])
      token = JwtToken.encode(user_id: user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end
end
