puts "what is your name?"
name = gets.chomp
puts "hello #{name}, where are you from?"
state = gets.chomp.upcase #make if statement more accurate
if state == "NY"
  puts "welcome to the Empire state"
elsif state == "NJ"
  puts "merge well"
else
  puts "whaaaa!?!?"
end #end of if statement


# puts "#{name}, you're from #{state}"

if weather == "rainy" && temp == "cold"
  puts "stay inside!"
end
