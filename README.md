<h1 align="center">
   Certificate Generator
</h1>

<p align="center">
  Certificate Generator is an API that generate generic certificates of completion on PDF format.
</p>

<hr />

<p align="center">In this project, I practiced important concepts from NodeJS, like Express, Handlebars, Axios, Puppeteer and Typescript.
</p>

<div align="center">
  <sub> Made with 💖 by
    <a href="https://github.com/guilhpupo">Guilherme Pupo
  </sub>
</div>

# 📌 Contents

- [Endpoints](#door-endpoints)
- [Technologies](#rocket-technologies)
- [How to Run](#computer-how-to-run)
- [Commands](#sparkles-commands)
- [Issues](#bug-issues)
- [License](#page_facing_up-license)
  
# :door: Endpoints
  
  ## POST /certificado
  Retrieves a certificate of completion
  
  Body example (JSON):
  
    {
      "template": "https://firebasestorage.googleapis.com/v0/b/certificate-generator-11d69.appspot.com/o/index.html?alt=media&token=5e4acb75-3ec4-4808-89e6-5b0f88dd9232",
      "data": {
          "fullname": "José da Silva",
          "hours": 30,
        "course": "NodeJS + Typescript",
        "date": "9 de Junho de 2021"
      }
    }
  
  Response 200 (application/pdf)
  
  <div align="center">
    <img src="https://user-images.githubusercontent.com/54157878/121449529-63a1cb80-c970-11eb-8d2f-36cc72ed26be.png" align="center" />
  </div>
      
    

# :rocket: Technologies

This project was made using the follow technologies:

- [NodeJS](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)
- [Axios](https://github.com/axios/axios)
- [Puppeteer](https://github.com/puppeteer/puppeteer/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# :computer: How to run

```bash
# Clone Repository
$ git clone https://github.com/guilhpupo/certificate-generator && cd certificate-generator
  
# Install Dependencies
$ yarn install
# or
$ npm install
  
# Run Aplication
$ yarn dev
# or
$ npm run dev
```
  
Application shall be running on http://localhost:3333/

# :sparkles: Commands

- `dev`: runs your application on `localhost:3333` on developer mode
- `build`: creates the production build version
- `start`: runs your application on `localhost:3333`

# :bug: Issues

Create a <a href="https://github.com/guilhpupo/certificate-generator/issues">new issue report</a>, it will be an honor to be able to help you solve and further improve our application.

# :page_facing_up: License

This project is under the [MIT License](./LICENSE) |
Made with 💖 by [Guilherme Pupo](https://www.linkedin.com/in/guilhpupo/).
