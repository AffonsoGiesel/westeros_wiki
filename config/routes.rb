Rails.application.routes.draw do
  devise_for :users, skip: [:sessions]

  devise_scope :user do
    post 'api/signup', to: 'api/registrations#create'
  end

  resources :continents, only: [:index, :show] do
    resources :kingdoms, only: [:index, :show] do
      resources :locations, only: [:index, :show]
      resources :conflicts, only: [:index, :show]
      resources :people, only: [:index, :show]
    end
  end

  get 'continents/search', to: 'continents#search'

  namespace :api do
    resources :continents, only: [:index, :show] do
      resources :kingdoms, only: [:index, :show] do
        resources :locations, only: [:index, :show]
        resources :conflicts, only: [:index, :show]
        resources :people, only: [:index, :show]
      end
    end

    post 'login', to: 'sessions#create'
    get 'test', to: 'test#index'
    get 'search', to: 'search#index'
  end
end
