# #server for index.erb
# require 'sinatra'
#
# get '/button_click' do
#   "<h1>hello #{params[:name]}</h1>"
# end
#
# get '/' do
#    name_param=params[:name] || nil
#    erb :name, locals:{name: name_param}
# end


#server for name.erb
require 'sinatra'

# get '/button_click' do
#   # name_param=params[:name] || nil
#   erb :name, locals:{name: params[:name]}
# end

get '/' do
  erb :name, locals:{name: params[:name]}
end


# #another one
#
# app.get('/button_click', function(req, res){
#   res.render('name.ejs', {name: req.query.name});
#
# });
