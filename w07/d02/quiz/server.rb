require 'sinatra'

get '/' do
  string = "<h1>hello world</h1>"
  erb :index, locals:{msg: string}
end

get '/name' do
  erb(:name, locals:{myname:"Willyum"})
end
