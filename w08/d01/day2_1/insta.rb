# require 'pry'
require 'sinatra'
# require 'json'
require 'httparty'

get '/' do
  url = "https://api.instagram.com/v1/tags/dogs/media/recent?client_id="
  response = HTTParty.get(url)
  finder = response["data"][0]["images"]["standard_resolution"]["url"]
  finderx = {
    image: finder
  }

  erb :index, locals: finderx
end
