Rails.application.routes.draw do
  #config/routes.rb
  root "home#index"
  namespace :api do
    namespace :v1 do
      resources :users
      post "authenticate", to: "authentication#authenticate"
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
