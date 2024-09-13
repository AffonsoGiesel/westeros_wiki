class Api::PeopleController < ApplicationController
  def index
    @kingdom = Kingdom.find(params[:kingdom_id])
    @people = @kingdom.people
    render json: @people
  end

  def show
    @kingdom = Kingdom.find(params[:kingdom_id])
    @person = @kingdom.people.find(params[:id])

    if @person
      render json: @person
    else
      render json: { error: 'Person not found' }, status: :not_found
    end
  end

  def set_kingdom
    @kingdom = Kingdom.find(params[:kingdom_id])
  end

end

  