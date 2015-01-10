# #while loop
# i = 0
# while i < 10
#   puts i
#   i+=1
# end

# #for loop
# numbers = [1,2,3,4,5]
# for numb in numbers #numb is just a section of the whole numbers array used for the for loop
#   puts numb
# end

hash = {a:1, b:2}
for x in hash
  puts "hello #{x[0]}" #hello a hello b
  puts "hello #{x[1]}" #hello 1 hello 2
end
