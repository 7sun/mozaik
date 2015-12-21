Rails.application.routes.draw do

  root 'pages#home'

  get '/gallery' => 'pages#gallery'

end
