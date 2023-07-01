# BitBin 📋 

**BitBin** is fully-featured yet simple pastebin/hastebin-like web app for storing and sharing plaintext and source-code snippets. Bitbin was originally intended to be a Hastebin clone but there are more features. BitBin is powered by Node.js (w/ Express) at the backend and MongoDB for the database.

## Features:
- Upload and share plaintext/code snippets as URLs.
- Fork and edit existing snippets.
- Persistent data storage.
- Export and import snippets.
- Syntax highlighting for 190+ languages (thanks to [highlight.js](https://highlightjs.org/))

## 🚀 Getting Started

### Installation

1. Clone the repository.

```sh
git clone https://github.com/waterrmalann/bitbin.git
```

2. Install the dependencies.

```sh
npm install
```

3. Run the project.

```sh
npm start
```

4. Access the application.

```
Open your browser and visit http://localhost:3000
```

### Folder Structure

The folder structure of the project is as follows:

```
.
├── server.js
├── controllers
│   └── snippetController.js
├── models
│   └── Snippet.js
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
├── views
│   ├── _buttons.ejs
│   ├── _head.ejs
│   ├── new.ejs
│   └── snippet.ejs
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

### Document Schema

The Snippet model has the following schema in the models/Snippet.js file:

```bson
{
    value: {
        type: String,
        required: true
    }
}
```

### 🤝 Contribution

Contributions are always accepted. Feel free to open a pull request to fix any issues or to make improvements you think that should be made. Any contribution will be accepted as long as it doesn't stray too much from the objective of the app. If you're in doubt about whether the PR would be accepted or not, you can always open an issue to get my opinion on it.

## License

This project is licensed under the permissive **MIT License**, see [LICENSE](LICENSE).
