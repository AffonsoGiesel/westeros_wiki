require 'rails_helper'

RSpec.describe Api::KingdomsController, type: :controller do
  let!(:kingdom) { create(:kingdom) }

  describe "GET #index" do
    it "returns a list of kingdoms" do
      get :index, params: { continent_id: kingdom.continent_id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an_instance_of(Array)
    end
  end

  describe "GET #show" do
    it "returns the kingdom details along with locations and people" do
      get :show, params: { id: kingdom.id }
      expect(response).to have_http_status(:ok)
      body = JSON.parse(response.body)
      expect(body['kingdom']).to be_present
      expect(body['locations']).to be_present
      expect(body['people']).to be_present
    end

    it "returns an error if the kingdom is not found" do
      get :show, params: { id: 'invalid_id' }
      expect(response).to have_http_status(:not_found)
      expect(JSON.parse(response.body)['error']).to eq('Kingdom not found')
    end
  end

  describe "GET #locations" do
    it "returns the locations of the specified kingdom" do
      get :locations, params: { kingdom_id: kingdom.id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an_instance_of(Array)
    end
  end

  describe "GET #people" do
    it "returns the people of the specified kingdom" do
      get :people, params: { kingdom_id: kingdom.id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an_instance_of(Array)
    end
  end
end
