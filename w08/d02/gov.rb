require 'sinatra'
require 'httparty'
require 'json'
require 'pry'

get '/' do
  string = "<h1>heads or tails</h1>"
  erb :govindex, locals:{msg: string}
end

# get '/search' do
#   binding.pry
#   name = request.params[senator]
#   url = "http://congress.api.sunlightfoundation.com/legislators?last_name=#{name}&apikey="
#   response = HTTParty.get(url)
#   finder = response["results"][0]["twitter_id"]
#
#   # (erb :govindex, {:locals finder})
#
#   # last_name = params.last_name.upcase
# end
