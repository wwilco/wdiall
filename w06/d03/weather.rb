def weather(con, temp)
  if con == "rainy"
    if temp == "cold"
      return "better stay inside!"
    elsif temp == "hot"
      return "sounds like a gross combination"
  elsif con == "sunny"
    if temp == "hot"
      return "maybe best to go swimming"
    elsif temp == "cold"
      return "bundle up!"
  elsif con == "windy"
    if temp == "hot"
      return "tornado!"
    if temp == "cold"
      return "ahhh"
  end
end
puts weather("windy", "hot")

#OR

# puts "rainy, sunny or windy?"
# con = gets.chomp
# puts "hot or cold?"
# temp = gets.chomp
# def weather(con, temp)
#   if con == "rainy" && temp == "cold"
#     puts "better stay inside!"
#   elsif con == "rainy" && temp == "hot"
#     puts "sounds like a gross combination"
#   elsif con == "sunny" && temp == "hot"
#     puts "maybe best to go swimming"
#   elsif con == "windy" && temp == "cold"
#     puts "bundle up!"
#   elsif con == "windy" && temp == "hot"
#     puts "tornado!"
#   end
# end
# weather(con, temp)
