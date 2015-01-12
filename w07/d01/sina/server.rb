require 'sinatra'

get '/coin_toss' do
  string = "<h1>heads or tails</h1>"
  erb :index, locals:{msg: string}
end

get '/dice_roll' do
  arr = [1,2,3,4,5,6].sample
  string = "<h1>#{arr}</h1>"
  erb :index, locals:{msg: string}
end

get '/magic8ball/will%20it%20snow%20tomorrow' do
  arr = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ].sample
  string = "<h1>#{arr}</h1>"
  erb :index, locals:{msg: string}
end

get '/rps/:id' do
  rps = ['rock', 'paper', 'scissor'].sample
  # string = "<h2> computer chooses #{rps}"
  path = params[:id]
  if path == 'rock'
    if rps == 'paper'
      string2 = "<p>computer chooses paper. you lose</p>"
      erb :index, locals:{msg: string2}
    elsif rps == 'scissor'
      string2 = "<p>computer chooses scissor. you win!</p>"
      erb :index, locals:{msg: string2}
    else
      string2 = "<p>computer also picked rock. you tie</p>"
      erb :index, locals:{msg: string2}
    end
  end

  if path == 'paper'
    if rps == 'scissor'
      string2 = "<p>computer chooses scissor. you lose</p>"
      erb :index, locals:{msg: string2}
    elsif rps == 'rock'
      string2 = "<p>computer chooses rock. you win!</p>"
      erb :index, locals:{msg: string2}
    else
      string2 = "<p>computer also picked paper. you tie</p>"
      erb :index, locals:{msg: string2}
    end
  end

  if path == 'scissor'
    if rps == 'paper'
      string2 = "<p>computer chooses paper. you lose</p>"
      erb :index, locals:{msg: string2}
    elsif rps == 'rock'
      string2 = "<p>computer chooses rock. you win!</p>"
      erb :index, locals:{msg: string2}
    else
      string2 = "<p>computer also picked scissor. you tie</p>"
      erb :index, locals:{msg: string2}
    end
  end
  else
    string2 = "<p>must choose rock, paper or scissor</p>"
    erb :index, locals:{msg: string2}
  end
end

#   if path == 'rock' && rps == 'scissor'
#     string2 = "<p>you win!</p>"
#     erb :index, locals:{msg: string2}
#   end
#
#   if path == 'rock' && rps == 'rock'
#     string2 = "<p>you tie</p>"
#     erb :index, locals:{msg: string2}
#   end
# end


# #sams method
# get '/tortilla/rice' do
#   string = "<h1>mmmmmmmmm</h1>"
#   erb :index, locals:{msg: string}
# end
# get '/tortilla/guac' do
#   string = "<h2>ahhh</h2>"
#   erb :index, locals:{msg: string}
# end
# get '/tortilla/:id' do
#   string = "<p> Well, #{params[:id]} is good on a tortilla too</p>"
#   erb :index, locals:{msg: string}
# end
# get '*' do
#   string = "<h3>sorry we only serve burritos</h3>"
#   erb :index, locals:{msg: string}
# end

# require 'sinatra' #just like js, but no var!
#
# get '/tortilla/rice' do
#   erb(:index, locals:{name: "MMMMM"})
# end
#
# get '/tortilla/guac' do
#   erb(:index, locals:{name: "AHHHHH"})
# end

# #sinatra uses port 4567
# require 'sinatra'
#
# get '/:id' do
#
#   erb(:index, locals:{text: "Sorry, we only serve burritos here!"})
#
# end
#
# get '/tortilla/:id' do
#
#   path = params[:id]
#
#   if path == "rice"
#     erb(:index, locals:{text: "MMMMM"})
#   elsif path == "guac"
#     erb(:index, locals:{text: "AHHH!"})
#   else
#     erb(:index, locals:{text: "Tortilla", p: "Well, #{path} is good on a tortilla, too."})
#   end
#
# end


# # davids method
# require 'sinatra'
#
# get '/tortilla/:id' do
#   path = (params[:id])
#
#   if path == "rice"
#     message = "<h1> MMMMMM </h1>"
#     erb(:index, locals:{text: message})
#   elsif path == "guac"
#     message = "<h2> yessss </h2>"
#     erb(:index, locals:{text: message})
#   end
# end
# require 'sinatra'
#
# get '/' do # http://localhost:4567/
#   erb(:index, locals:{text:"Willyum"}) #takes 2 arguments. index: gets the file, locals: a variable within the erb file
# end
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
