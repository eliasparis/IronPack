Rails.application.routes.draw do

  get '/' => 'users#no_cookies', :as => 'intro'
  get '/urls' => 'urls#parse'
  get '/player' => 'users#index'
  get '/screen_one' => 'users#game_one', :as => 'play1'
  get '/screen_two' => 'users#game_two', :as => 'play2'
  get '/screen_three' => 'users#game_three', :as => 'play3'
  get '/congrats' => 'users#congrats', :as => 'congrats'
  get '/saving' => 'users#wins_update_screen', :as => 'save'
  get '/rankings' => 'urls#ranking', :as => 'rankings'
  get '/:promocode' => 'sessions#create'
  post '/introdone' => 'sessions#create'
  post '/points_updating' => 'urls#points_refresh'

end
