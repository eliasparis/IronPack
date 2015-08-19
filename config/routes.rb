Rails.application.routes.draw do

  get '/' => 'users#no_cookies', :as => 'intro'
  get '/player' => 'users#index'
  get '/screen_one' => 'users#game_one', :as => 'play1'
  get '/screen_two' => 'users#game_two', :as => 'play2'
  get '/saving' => 'users#wins_update_screen', :as => 'save' 
  get '/:promocode' => 'sessions#create'
  post '/introdone' => 'sessions#create'

end
