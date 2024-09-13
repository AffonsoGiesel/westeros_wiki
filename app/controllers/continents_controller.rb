class ContinentsController < ApplicationController
    def index
      @continents = Continent.all
      render json: @continents
    end
  
    def show
      @continent = Continent.find(params[:id])
      render json: @continent
    end
  
    def search
      @results = Kingdom.joins(:locations, :conflicts, :people)
                        .where("kingdoms.name LIKE ? OR locations.name LIKE ? OR conflicts.name LIKE ? OR people.name LIKE ?", 
                               "%#{params[:query]}%", "%#{params[:query]}%", "%#{params[:query]}%", "%#{params[:query]}%")
      render json: @results
    end
  end
  