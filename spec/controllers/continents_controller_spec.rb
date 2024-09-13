require 'rails_helper'

RSpec.describe ContinentsController, type: :controller do
  let!(:continent) { create(:continent) }

  describe "GET #index" do
    it "returns a list of continents" do
      get :index
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an_instance_of(Array)
    end
  end

  describe "GET #show" do
    it "returns the details of a specific continent" do
      get :show, params: { id: continent.id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to include('id' => continent.id)
    end
  end

  describe "GET #search" do
    it "returns search results for kingdoms, locations, conflicts, and people" do
      get :search, params: { query: 'some_query' }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an_instance_of(Array)
    end
  end
end
