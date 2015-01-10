def mult5(number)
  return number % 5 == 0
end

get5 = true

while get5 #if its true execute while loop
  puts "enter a number or quit"
  number = gets.chomp

  if number == "quit"
    puts "goodbye"
    get5 = false # takes you out of loop
  else
    multiple5 = mult5(number.to_i) #must put number to integer since youre using the modulo in def mult5
    if multiple5
      puts number + "is a multiple of 5"
    else
      puts number + " is not a multiple of 5"
    end
  end
  puts
end

# puts "enter a number or quit"
# num = gets.chomp
# while num



  # #while loop
  # i = 0
  # while i < 10
  #   puts i
  #   i+=1
  # end
#Kyle's code

def multi_five(num)
  num.to_i % 5 == 0
end


ans = 0
while ans != "quit"
  puts "give a number to find out if it's divisible by 5, or type quit to exit"
  ans = gets.chomp
  if multi_five(ans) == true
    puts "it is a multiple of five"
  else
    puts "not a multiple of five dummy, its so #{multi_five(ans)}"
  end
end
