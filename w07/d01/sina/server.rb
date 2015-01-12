# require 'sinatra' #just like js, but no var!
#
# get '/tortilla/rice' do
#   erb(:index, locals:{name: "MMMMM"})
# end
#
# get '/tortilla/guac' do
#   erb(:index, locals:{name: "AHHHHH"})
# end

#sinatra uses port 4567
require 'sinatra'

get '/:id' do

  erb(:index, locals:{text: "Sorry, we only serve burritos here!"})

end

get '/tortilla/:id' do

  path = params[:id]

  if path == "rice"
    erb(:index, locals:{text: "MMMMM"})
  elsif path == "guac"
    erb(:index, locals:{text: "AHHH!"})
  else
    erb(:index, locals:{text: "Tortilla", p: "Well, #{path} is good on a tortilla, too."})
  end

end


# get '/tortilla/:id' do
#   path = (params[:id])
#   # str = "<p>#{path} is good in a tortilla.</p>"
#   erb(:index, locals:{thing:path})
# end
#
# # get '/' do # http://localhost:4567/
# #   erb(:index, locals: {name:"Willyum"}) #takes 2 arguments. index: gets the file, locals: a variable within the erb file
# # end
#
# my_name = "Willyum" #using a variable
# get '/' do #
#   erb(:index, locals: {name:my_name}) #takes 2 arguments. index: gets the file, locals: a variable within the erb file
# end
#
# get '/goodbye' do # http://localhost:4567/goodbye
#   not_a_name = "goodbye"
#   erb(:index, locals:{name:not_a_name})
# end
#
# # get ':id' do #http://localhost:4567/whateva, this prints 'whateva' on the screen
# #   path = (params[:id])
# #   erb(:index, locals:{name:path})
# # end
#
# get '/google' do
#   str = "<a target=_blank href='http://google.com'>google</a>"
#   erb(:index, locals:{name:str})
# end
#
# get '/:id' do #can perform operations within the path
#   path = (params[:id]) #params is used when somethign happens sinatra is not prepared for
#   pathnum = path.length
#   counter = 0
#   repeated = ''
#   while counter < pathnum do
#     repeated += path
#     counter += 1
#   end
#   puts params
#   erb(:index, locals:{name:repeated})
# end
