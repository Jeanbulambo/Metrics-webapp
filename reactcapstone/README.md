![](https://img.shields.io/badge/Microverse-blueviolet)

# Metrics-webapp

## Built With

- JavaScript
- React-Redux

## Live Demo (if available)

[Live Demo Link](https://livedemo.com)
[video] (https://www.loom.com/share/56642431b1a64efea67ae826f50c3a2f)
## Getting Started
- Make sure you have node installed on your local machine.

step 1: Clone this repo locally using git in the command line and the following command

git clone git@github.com:Jeanbulambo/Metrics-webapp.git

Step 2: run npm install to download the necessary modules.

step 3: run npm start to load the project.

### Prerequisites

Any html and css code editor like Vscode or Vim.

### Description
API First you need to choose an API to base the development of the webapp on. The API should allow you to get numeric values based on a parameter. We recommend that you choose an API that is open or needs an API key. If you choose an API that require authentication, you should implement it on your own.

Some example APIs are:

Financial modeling prep API: stock data.
Air pollution API: air quality data.
You can find many APIs in this GitHub repo or in ProgrammableWeb. Some of the APIs requires a token for authentication and some others are just open.

Design

You should follow these design guidelines, including:
Colors (select one main color for your website).
Typography: font face, size and weight.
Layout: composition and space between elements.
Original design idea by Nelson Sakwa on Behance.

The Creative Commons license of the design requires that you give appropriate credit to the author. Therefore, you must do it in the README of your project.

Interactions

Home page

When the page loads, the webapp shows the list of categories that could be filtered out by some parameter, for example by the category name.
Along with the category name, you will display some numeric values per category that come from the API.
When the user clicks (or taps) on a category item, the application navigates to the details page.
Details page

In the details page, the webapp retrieves data from the API to show detailed data in the category.
When the user clicks on the "Back" button (<), the user navigates to the home page.
Testing requirements

Create unit tests for pure functions in your Redux code.
Create integration tests for your application using the React Testing Library.
You may need to mock the access to the API, so that your tests don't send actual requests.
You may need to mock the connection to the Redux Store.
Technical requirements

The project is a single-page application (SPA) built with React and Redux.
The data retrieved from the API should be stored in the Redux store.
You should filter the data that you retrieve from the API using a Filter stateless component.
Every page (the main page and the pages for each item) should have a unique route within the SPA.
The project should be deployed and accessible online (add a link to the online version of your app to your README file).
Project documentation
Once you have finished the development of the project, you should record a video presenting the features of the project you built. It is a video with a maximum length of 5 minutes. The content of the video should include:

a description of the project.
a demo of the project features.
you should also highlight some interesting piece of code or something you built that you are very proud of.
For recording the video you can use tools like Loom that let you share a private link to the recording, and configure a shot that shows your computer screen and your face at the same time in a small picture.


## Authors

👤 **Jean Bulambo**

- GitHub: [@Jeanbulambo](https://github.com/Jeanbulambo)
- Twitter: [@Jeanbulambo](https://twitter.com/Jeanbulambo4)
- LinkedIn: [@Jeanbulambo](https://www.linkedin.com/in/jean-bulambo-20662a14a/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
