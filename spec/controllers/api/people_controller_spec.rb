require 'rails_helper'

RSpec.describe Api::PeopleController, type: :controller do
  let!(:kingdom) { create(:kingdom) }
  let!(:person) { create(:person, kingdom: kingdom) }

  describe "GET #index" do
    it "returns a list of people for a kingdom" do
      get :index, params: { kingdom_id: kingdom.id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an_instance_of(Array)
    end
  end

  describe "GET #show" do
    it "returns the details of a specific person" do
      get :show, params: { kingdom_id: kingdom.id, id: person.id }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to include('id' => person.id)
    end

    it "returns an error if the person is not found" do
      get :show, params: { kingdom_id: kingdom.id, id: 'invalid_id' }
      expect(response).to have_http_status(:not_found)
      expect(JSON.parse(response.body)['error']).to eq('Person not found')
    end
  end
end
