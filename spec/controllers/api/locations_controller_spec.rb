require 'rails_helper'

RSpec.describe Api::LocationsController, type: :controller do
  let!(:kingdom) { create(:kingdom) }
  let!(:location) { create(:location, kingdom: kingdom) }

  describe "GET #index" do
    it "returns a list of locations for a kingdom" do
      get :index, params: { kingdom_id: kingdom.id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an_instance_of(Array)
    end
  end

  describe "GET #show" do
    it "returns the details of a specific location" do
      get :show, params: { kingdom_id: kingdom.id, id: location.id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to include('id' => location.id)
    end

    it "returns an error if the location is not found" do
      get :show, params: { kingdom_id: kingdom.id, id: 'invalid_id' }
      expect(response).to have_http_status(:not_found)
      expect(JSON.parse(response.body)['error']).to eq('Location not found')
    end
  end
end
