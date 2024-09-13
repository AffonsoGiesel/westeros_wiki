class Api::KingdomsController < ApplicationController
  def index
    continent_id = params[:continent_id]
    @kingdoms = Kingdom.where(continent_id: continent_id)
    render json: @kingdoms
  end

  def show
    @kingdom = Kingdom.find(params[:id])
    @locations = @kingdom.locations
    @people = @kingdom.people
    
    render json: {
      kingdom: @kingdom,
      locations: @locations,
      people: @people
    }
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Kingdom not found' }, status: :not_found
  end

  def locations
    @kingdom = Kingdom.find(params[:kingdom_id])
    @locations = @kingdom.locations
    render json: @locations
  end

  def people
    @kingdom = Kingdom.find(params[:kingdom_id])
    @people = @kingdom.people
    render json: @people
  end
end

