candy = ["starburst", "lifesaver","snickers","milkyway","three musketeers","skittles"]

#part 1
# candy.each do |elem|
#   puts elem
# end
#
# # part 2
# x = candy.map {|type| type.upcase}
# puts x
#
puts "type any letter"
answer = gets.chomp

# bonus
letter = candy.select{|word| word.include?(answer)}
print letter #makes new array with .select
