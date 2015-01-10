# def generate_welcome_string(name)
#   prefix = "hello "
#   postfix = ". have a nice day."
#   welcome_string = prefix + name + postfix
#   return welcome_string
# end
#
# puts generate_welcome_string("will")

def generate_welcome_string(name)
  prefix = "hello"
  postfix = ". have a nice day."
  "#{prefix}#{name} #{postfix}"
  # prefix + name + postfix
end

puts generate_welcome_string("will")
