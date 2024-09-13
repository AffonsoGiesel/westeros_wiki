require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let!(:user) { create(:user, email: 'user@example.com', password: 'password123') }

  describe "POST #create" do
    it "returns a token for valid credentials" do
      post :create, params: { email: 'user@example.com', password: 'password123' }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['token']).to be_present
    end

    it "returns an error for invalid credentials" do
      post :create, params: { email: 'user@example.com', password: 'wrongpassword' }
      expect(response).to have_http_status(:unauthorized)
      expect(JSON.parse(response.body)['error']).to eq('Invalid email or password')
    end
  end
end
