Rails.application.routes.draw do
  #config/routes.rb
  root 'home#index'
  post 'authenticate', to: 'authentication#authenticate'
  scope '/admin' do
    resources :users
  end
    
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
