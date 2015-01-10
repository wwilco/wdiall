name ="sam"
puts name.upcase //"SAM"

js: "hello" + name +", gooday."
ru: "hello, #{name}, gooday."

clear all variables:

>ARRAYS
js and ru are the same. except dont need ; for ru
arr = []
arr.push("hello")
puts arr
arr[1]="world"
arr[0]="1"// change hello to world
arr.push(2)
arr.delete_at(1) //deletes up until the index, so ["world, 2"] = ["2"]
arr.pop //removes last element of arr. makes a change to original array. destructive method
arr<<"c"<<"d"<<[3,4]//need quotes to make it a string. << is the shovel method, can do one item at a time or multiple
arr[2][0]// this grabs the 2nd elem of arr ([3,4]) then grabs 0 elem which is 3

>HASH
hash = {}
hash[:a]= 1 //colon infront makes it a symbol. tells you ":a = 1". symbols are faster than strings and behave similarly
puts hash ..... {:a=>1}
hash={a:1, b:2} //keys within a hash cannot be duplicated
puts hash[:a] .... 1
hash.delete(:b) .... 2// 2 is deleted but it is still printed in terminal


state = "NY"
if state == "NY"
  puts "welcome to NY"
else
  puts "where is that?"
end


puts // puts stuff into the terminal
gets // gets stuff from the terminal
gets.chomp // prompts for something

puts "what is your name?"
name = gets.chomp
puts "hello #{name}, where are you from?" //use double "" when using #{hash}
state = gets.chomp
puts "#{name}, you're from #{}


js:
var generate_welcome_string = function(name){
  var prefix = "hello";
  var postfix = ". have a nice day";
  var welcome = prefix + name + postfix;
  return welcome_string
}

ru:
def generate_welcome_string(name)
prefix = "hello"
postfix = ". have a nice day."
welcome_string = prefix + name + postfix
return welcome_string
end
