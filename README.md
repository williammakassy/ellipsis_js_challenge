# ELLIPSIS_JS_CHALLENGE

This project was developed by William David Makassy.

## SETUP INSTRUCTIONS

1. Start by downloading the project from the repository, the project name is *ellipsis_js__challenge*
2. Create new folder where you will remember the path of it, but I advice to create the folder to C drive
3. Then extract the downloaded project from github in the new folder which you have created.
4. After that open the text editor, for me I used the Visual Studio Code text editor which I'm comfortable with it.But You can use any text editor which supports JS.
5. If you use VS Code text editor click the File Tab and the select *Open Folder* where you have to choose the right path where you created the new folder.
6. By doing so all the files will appear on the left sidebar of the VS Code, After that click the shortcut `ctrl + j` to open the Terminal.
7. After opening the Terminal, you have to type the command `npm start` so to run the project to the browser.
8. Then after running the command the project will direct open to the browser where you can see all the list of series and movies fetched from the json file.


## TECHNICAL AND ARCHITECTURAL CHOICES

1. I faced some errors when I was fetching data from the json file you provided, so I tried different approaches so as to solve the errors but I ended up by the last approach I performed; When I looked at the json file I saw at the beginning there is a curly bracket, followed by string *"Total"* which indicates the total of entries, and last the string *"entries"* so I tried the delete all of them and the script started from the square brackets, after that I tried to fetch the data and things goes fine.
2. So the file did not follow the right syntax for the json, that why some errors occurs


## IMPROVEMENTS TO BE ADDED

1. There are some improvement I have to make them, which are creating the loading and error states of fetching the JSON feed, Here I failed to create the loading page state and errro page state which helps to show if the data are being fetched or some errors occurs, but If I can get more time, I'm able to accomplish the task.


## WHEN MORE TIME IS ALLOCATED

1. If there's more time allocated, I'll create a search form so as the client can search for series and movies he/she wants, and the app will return the results for the input which has been inserted.
2. Also instead of output few series and movies, I will pagination where all the series and movies will be displayed on the screen.
3. Then I will create an admin panel which will enable app admin to create,update, and delete series and movies.
4. Also I can add some activity like users will be able to download the series or movie they want, but to do so there must be some issues of users to pay or create an account for him/her to download or watch the series and movie.
5. Example how *Netflix* works for user to watch or download the movie he/she will create an account and pay for the subscription.
