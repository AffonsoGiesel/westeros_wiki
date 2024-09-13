class Api::SearchController < ApplicationController
  def index
    query = params[:query]
    
    kingdoms = Kingdom.where('name ILIKE ?', "%#{query}%").select(:id, :name, :continent_id)
    
    people = Person.joins(:kingdom).where('people.name ILIKE ?', "%#{query}%").select('people.id, people.name, people.kingdom_id, kingdoms.continent_id')
    
    locations = Location.joins(:kingdom).where('locations.name ILIKE ?', "%#{query}%").select('locations.id, locations.name, locations.kingdom_id, kingdoms.continent_id')
    
    results = kingdoms.map { |k| k.attributes.merge(type: 'kingdom') } +
              people.map { |p| p.attributes.merge(type: 'person') } +
              locations.map { |l| l.attributes.merge(type: 'location') }
    
    render json: results
  end
end
