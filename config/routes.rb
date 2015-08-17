Rails.application.routes.draw do

  get '/player' => 'users#index'
  get '/thegame' => 'users#play', :as => 'play1'
  resources :users
  get '/:promocode' => 'sessions#create'

end
