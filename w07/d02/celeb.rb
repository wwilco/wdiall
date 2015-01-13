require 'sinatra'

famous = ['axl rose', 'louis c.k.', 'malcolm x', 'scooby-doo']

get '/' do
  erb:index, locals{names:famous}
end

# famous = %w{Axl\ Rose Scooby-Doo Louis\ C.K. Malcolm\ X NaS}
#
# get '/' do
#   string = '<html><body><ul>'
#   famous.each do |celeb|
#     string += "<li> #{celeb} </li>"
#   end
#   return string += '</h1></body></html>'
# end

# famous = %w{Axl\ Rose Scooby-Doo Louis\ C.K. Malcolm\ X NaS}
