# Juno
Juno was created as a React-Native-based web application to help users care for their aging loved ones. It allows users to get recommendations on helpful products and articles that are relevant to their loved one. With Juno, users can:
* View and save recommended products and articles based on the needs of their aging loved ones
* Analyze the ADLs (activities of daily living) of multiple people under one account

## Download and Install
* First, install Node.js v.14, Firebase and the [Firebase CLI](https://courses.cs.northwestern.edu/394/intro-react-native-deploy.php)
    * [Node.js Installer](https://nodejs.org/en/)
    * `npm install -g firebase-tools`
    * For Mac OS with Expo, run `expo install firebase`
    * For Windows, run `npm install firebase`
* Second, you have to [clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the GitHub repository
* Third, `run npm install` in the terminal/command prompt. This installs all the npm modules that are dependencies (i.e. global libraries).

## Firebase
* Some general instructions on how to set up the environment and use firebase are found at [https://courses.cs.northwestern.edu/394/intro-react-native-deploy.php](https://courses.cs.northwestern.edu/394/intro-react-native-deploy.php)
* After Firebase installation, you must initialize it: `firebase init`
* Now go to the Firebase console, create a new web app, and select that you want realtime database and storage. Follow the instructions under Firebase SDK to replace the config `firebase.js` with the new config.
* Follow the instructions at [https://courses.cs.northwestern.edu/394/github-actions-setup.php](https://courses.cs.northwestern.edu/394/github-actions-setup.php) to get a secret key to enable automatic deployment upon pushes to Github

## Firebase Realtime Database
We created an example of the database in the `databaseExample.json` file that can be imported into the database. This has a number of old user accounts, but it importantly contains the values associated with the ADLs (eg ADL names, questions, definitions, products, articles, etc).

## Build/Deploy
In Terminal, navigate to the root of the project. Run expo build:web. This makes a directory with the compiled website. From there, you can run firebase deploy to deploy the site to Firebase manually. Alternatively, you could push to GitHub, and (if you added a secret Firebase token key) it will take care of the deployment with the configuration specified in the YAML file.

## Future Development/Known issues
**Filling Out Questionnaire**
* Editing profile 
    * No feature in place for editing profiles
**Contact a Nurse**
* Nurse contact
    * Calling feature is built but needs a number to call. There is no real nurse called Jane with the details specified.
**User Accounts**
* Login/Registration
    * Users cannot log out.
    * There is some obsolete logic in the app related to guest accounts.

## Developers
This project/repo was built as a part of the Comp_Sci 394 course at Northwestern University by Nicole Hessler, Robert Goodman, Max Kolowrat, and Tiffany Lau.
 
