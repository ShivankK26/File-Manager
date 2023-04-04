<!-- ABOUT THE PROJECT -->
# About The Project

![Screenshot 2023-04-04 at 11 17 17 AM](https://user-images.githubusercontent.com/115289871/229699391-fc3300ee-e69e-4598-a35d-081fbad46383.png)



In this Project, I've built a WebApp using which you can organize all the unsorted files in a folder in your local system. This Project is useful if you want to organize large number of files which isn't possible to do manually.



Use the `README.md` to get started.




# Built With

The Tech Stacks use are:

<div align="center">
<a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,expressjs" />
</a>
</div>




<!-- GETTING STARTED -->
# Getting Started

To get started, create basic files such as fo.js and inside the Project create another directory called commands within which create files help.js, organize.js, and tree.js.


## Prerequisites

To begin with our Project, we'll need to install some npm packages like node and express using the command given below.

* npm

  ```sh
  npm install node express
  ```


* Some other modules

  ```sh
  const path = require("path");
  const fs = require("fs");
  ```
  
  
* To ease the process of development, we'll install nodemon (Make sure you already have nodemon installed in your system, if not then [visit here](https://nodemon.io/)).

  ```sh
  npm i nodemon
  ```

## Installation

In this Project, we'll use the path and fs module of Node.js in order to access the various file paths and perform all the file system operations.
In order to sort the different types of files, we'll create a JavaScript Object of all types of file formats available.


```sh
  let types = 
{
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  image: ["jpg", "png"],
};
  ```









<!-- CONTACT -->
# Contact

Your Name - Shivank Kapur - shivankkapur2004@gmail.com

Project Link: 
