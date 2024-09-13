require 'rails_helper'

RSpec.describe Api::SearchController, type: :controller do
  let!(:kingdom) { create(:kingdom) }
  let!(:person) { create(:person, kingdom: kingdom) }
  let!(:location) { create(:location, kingdom: kingdom) }

  describe "GET #index" do
    it "returns search results for kingdoms, people, and locations" do
      get :index, params: { query: 'Lannister' }
      expect(response).to have_http_status(:ok)
      body = JSON.parse(response.body)
      expect(body).to include(hash_including('type' => 'kingdom'))
      expect(body).to include(hash_including('type' => 'person'))
      expect(body).to include(hash_including('type' => 'location'))
    end
  end
end
