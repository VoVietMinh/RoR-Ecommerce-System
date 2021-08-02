Rails.application.routes.draw do
    #config/routes.rb
    root 'home#index'
    post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
