require 'sinatra'



get "/" do
  names = ['will', 'al', 'malcolm', 'scooby-doo'].sample
  home = ['nyc', 'bk', 'queens', 's.i', 'the bronx'].sample
  color = ['red', 'green', 'black', 'blue', 'yellow', 'brown'].sample
  band = ['Can', 'NaS', 'The Vines', 'Star Slinger', 'Out Hud', 'the who'].sample
  art = ['van gogh', 'basquiat', 'picaso', 'pollack'].sample

  (erb :person, locals:{name: names, home: home, color: color, band: band, art: art})
end
