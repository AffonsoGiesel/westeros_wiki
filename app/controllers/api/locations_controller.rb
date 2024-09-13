class Api::LocationsController < ApplicationController
  def index
    @kingdom = Kingdom.find(params[:kingdom_id])
    @locations = @kingdom.locations
    render json: @locations
  end

  def show
    @kingdom = Kingdom.find(params[:kingdom_id])
    @location = @kingdom.locations.find(params[:id])
    render json: @location
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Location not found' }, status: :not_found
  end

  def set_kingdom
    @kingdom = Kingdom.find(params[:kingdom_id])
  end
  
end
