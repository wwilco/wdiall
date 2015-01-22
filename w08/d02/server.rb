require 'sinatra'
require 'httparty'

get '/' do
  url = "https://api.instagram.com/v1/tags/dogs/media/recent?client_id="
  response = HTTParty.get(url)
  urls_array = response["data"]
  erb(:index, locals:{array: urls_array})
end
