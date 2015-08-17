Rails.application.routes.draw do

  get '/' => 'users#no_cookies', :as => 'intro'
  get '/player' => 'users#index'
  get '/thegame' => 'users#play1', :as => 'play1'
  get '/:promocode' => 'sessions#create'
  post '/introdone' => 'sessions#create'

end
