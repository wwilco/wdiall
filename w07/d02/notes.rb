# examples
require 'sinatra'
get '/' do # this is a block
  "<h1> hello world</h1>"
  text = "<h2>this is</h2"
  puts text #this would be the line thats printed, and this would print nothing
end

# example of a method
name = "sam"
def say_hello
  puts "hello #{name}" #would not print sam because "sam" is outside of the scope. if it were inside the method, it would print
end

# example of block
require 'sinatra'
name = "sam"
get '/' do
  "<h1> hello #{name}</h1>" #this would print the name, because it is a block
end

#another method example
health = 10
def increase_health(health)
  health += 1
end
health = increase_health(health)

#will build an ul of "sonny and cher." an annoying way!
#if you change the "+=" to "=" it would replace each line before it
#if you change the '+=' to '+' it wil store but not print all of them
get '/' do
  my_string = "<html><body><ul>"
  my_string += "<li>sonny</li>"
  my_string += "<li>cher</li>"
  my_string += "</ul></body></html>"
  return my_string #this work without this return
end
#the code above, rewritten using a loop
get '/' do
  people = ['sonny', 'cher']
  my_string = '<html><body><ul>'
  people.each do |person|
    my_string += '<li>#{person}</li>'
  end
  return my_string += '</ul></body></html>'
end
