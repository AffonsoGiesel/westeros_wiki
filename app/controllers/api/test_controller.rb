class Api::TestController < ApiController
  def index
    render json: { message: 'Test controller works!' }, status: :ok
  end
end
