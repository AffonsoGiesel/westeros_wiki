require 'rails_helper'

RSpec.describe Api::RegistrationsController, type: :controller do
  describe "POST #create" do
    let(:valid_attributes) { { registration: { email: 'user@example.com', password: 'password123', password_confirmation: 'password123' } } }
    let(:invalid_attributes) { { registration: { email: '', password: '', password_confirmation: '' } } }

    it "creates a new user with valid attributes" do
      post :create, params: valid_attributes
      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)['email']).to eq('user@example.com')
    end

    it "returns errors with invalid attributes" do
      post :create, params: invalid_attributes
      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)).to include('email' => ["can't be blank"])
    end
  end
end
