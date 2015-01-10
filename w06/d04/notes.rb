# #each method
# array = [1,2,3,4,5]
# array.each do |num|
#   puts num
# end

# arr = ["Mario", "Luigi", "Peach", "Toad"]
# arr.each do |names|
#   puts names.upcase
# end

# hash = {"leo"=>"blue", "mike"=>"orange", "don"=>"purple", "raph"=>"red"}
# hash.each do |key, value|
#   puts "#{key} wears a #{value} bandana"
# end

#Nintendo characters
characters = {
  "Nintendo" => ["Mario", "Luigi", "Peach", "Toad"],
  "Sega" => ["Sonic", "Tails", "Robotnick"],
  "Sony" => ["Crash Bandicoot", "Nathan Drake", "Solid Snake"]
  }
hash.each do |key, value|
  puts "#{company} has the following characters: #{characters}.".upcase
end

#OR

# characters = {
#   "Nintendo" => ["Mario", "Luigi", "Peach", "Toad"],
#   "Sega" => ["Sonic", "Tails", "Robotnick"],
#   "Sony" => ["Crash Bandicoot", "Nathan Drake", "Solid Snake"]
# }
# characters.each do |key, value|
#   puts "#{key} has the following characters:"
#   value.each do |character|
#     puts character
#   end
# end


# #notes
# nums = [1,2,3]
# nums.each {|n| puts n}
# #OR
# nums = [1,2,3]
# nums.each do |n|
#   put n
# end

# #select
# numbers = [1,2,3,4,5,6]
# evens = numbers.select{|n|n%2==0}
# evens = [2,4,6]
# puts evens

characters = ["Mario", "Luigi", "Peach",
  "Toad", "Sonic", "Tails",
  "Robotnick", "Crash Bandicoot", "Nathan Drake",
  "Solid Snake"]
  cword = characters.select{|word|word.upcase.include?("C")}# ? part of include method
  puts cword
  #OR,
# c = characters.select do |character|
#   word = character.upcase
#   word.include?("C")
# end
#   puts c


# numbers = [1,2,3,4,5]
# mult_by_3 = numbers.map{|num| num * 3}
# #mult_by_3 will produce in node [3,6,8,12,15], but .map is not a destructive method


characters = ["Mario", "Luigi", "Peach",
  "Toad", "Sonic", "Tails",
  "Robotnick", "Crash Bandicoot", "Nathan Drake",
  "Solid Snake"]
caps = characters.map{|char| char.upcase}
puts caps

  # caps = characters.map do |character|
  #   word = character.upcase
  # end
  # puts caps
