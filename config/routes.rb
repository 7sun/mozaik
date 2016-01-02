Rails.application.routes.draw do

  root 'pages#gallery'

  get '/gallery' => 'pages#gallery'

  get '/bos' => 'pages#bos'

end
