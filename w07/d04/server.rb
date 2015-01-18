require 'sinatra'

items = []

get '/' do
  erb(:hw, locals: {items: items}) # no items yet
end

post '/add' do

  stuff = {
    first: params[:name1],
    second: params[:name2],
    xemail: params[:email]
  }

  items.push(stuff)
  erb(:hw, locals: {items: items})
end

# notes on this assignment
# params[:name]
