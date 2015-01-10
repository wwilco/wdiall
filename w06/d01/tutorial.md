* Digital Ocean(DO) is the server we will be hosting our project on.
  * What you need:
DO account username and password
The SSH key (from GitHub) which will connect your javascript server to the DO server.
Finalized or functional Github repository.
  * Make sure you have pushed everything before starting the hosting process.
    * Run “npm init”.
    * SSH to your DO domain. For example, “ssh root@[your-name].yourDOdomain”
    * git clone the https link from your Github repo. This automatically creates a folder for your repository in your project folder.
    * If you have recently made changes, you will need to pull down those changes using “git pull origin master”.
    * cd into the cloned folder (use ls to make sure you have the right folder) and “npm install http”.
    * Run your chat app server code (e.g. node server.js). This will turn your DO box into a WebSocket server running on whatever port number used in the Javascript server
