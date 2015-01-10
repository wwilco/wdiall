def meaning_of_life
  return 42
end

puts "do you want to know the meaning of life?"
answer = gets.chomp

if answer == "y"
  puts meaning_of_life
elsif answer == "n"
  puts "bummer"
end
