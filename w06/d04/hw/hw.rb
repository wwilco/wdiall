# #EX 1 fav letter
# names = ["Janet", "Wilber", "Dominique", "Carli",
#   "Pinkie", "Pietro", "Devyn", "Heaven", "Oma", "Astrid"
#   ]
# puts "whats your fav letter?"
# ans = gets.chomp.upcase
#
# word = names.select{|name|name.upcase.include?(ans)}
# puts word

#bonus1
# names.each do |ans|
#   puts ans
# end

#EX 2, hip to square

#def sq(num)
#   return num.to_i ** 2
# end
#
# puts "pick a number"
# answer = gets.chomp
# puts "#{sq(answer)}"
# #OR
# puts "pick a number"
# answer = gets.chomp.to_i
# double = answer * answer
# puts double

#EX 3
# numbers = [1,2,3,4,5]
# mult_by_3 = numbers.map{|num| num * 3}
# #mult_by_3 will produce in node [3,6,8,12,15], but .map is not a destructive method

x = true
arr = []

while x == true
  puts "enter numbers, then 'end' to finish"
  input = gets.chomp

  input != "end"
  arr.push(input.to_i)

  if input == "end"
    x = false
    square = arr.map{|num| num ** 2}
    square.pop
    print square
  end
end




# caps = characters.map do |character|
#   word = character.upcase
# end
# puts caps


#   ans = gets.chomp
#   if multi_five(ans) == true
#     puts "it is a multiple of five"
#   else
#     puts "not a multiple of five dummy, its so #{multi_five(ans)}"
#   end
# end
# if input != "end"
#   arr.push(input)
# elsif input == "end"
#   square = arr.map{|num| num.to_i ** 2}
#   puts square
# end

#
#
# def sq(num)
#   return num.to_i ** 2
# end
#
# sq = true
#
# while sq #if its true execute while loop
#   puts "enter numbers then end"
#   input = gets.chomp
#
#   if input != "end"
#     xx = sq(input)
#   elsif input == "end"
#     multiple5 = mult5(number.to_i) #must put number to integer since youre using the modulo in def mult5
#     if multiple5
#       puts number + "is a multiple of 5"
#     else
#       puts number + " is not a multiple of 5"
#     end
#   end
#   puts
# end
