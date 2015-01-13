require 'sinatra'
#rachel's code
get "/:id1/:id2" do
  width2 = (params[:id1]).to_i
  height2 = (params[:id2]).to_i
  erb :index, locals:{width: width2, height: height2}
end
# #my code
# get '/300/:height' do
#   counter = 0
#   path2 = (params[:height]).to_i
#   counter += 50
#   if path2 == counter
#     string += '<img src= "http://localhost:4567/300/ " >'
#     erb:index, locals:{pic: string}
#   end
# end

# #seans code
# require 'sinatra'
#
# get "/cats/:width/:height" do
#   width = (params[:width]).to_i
#   height = (params[:height]).to_i
#   erb(:index, locals: {width})
# end
