<!--@h1([pkg.name])-->

# @cactus-technologies/lyme-registration

<!--/@-->

<!--@pkg.description-->

A react web app that handles user registration. The app is displayed as a web page using a Kiosk Browser app on the tablet. Because the page needs access to the device’s camera, the page needs to be served over HTTPS. This is achieved via a proxy on the server, and can be accessed at https://10.0.55.10:3031/tablet (notice that the port is 3031 instead of 3030).

A user is created on the server via a POST request, and the image of the user is transferred as a base64 string that’s saved to disk on arrival. The tablet receives a websocket message from the server telling it whether or not the booth is occupied, which dictates the state of the tablet. If the websocket disconnects, upon reconnecting the tablet makes a request to the server checking this piece of state and so as to determine whether or not a new user should be able to login.

<!--/@-->

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

<!--@installation()-->

## Installation

```sh
git clone https://github.com/CactusTechnologies/lyme_server && cd ./lyme_server
npm install
```

<!--@Setup()-->

## Usage

Production:

`npm run build` from the lyme-build project root will build the project and copy the files to the `lyme-server/public/` folder

Development:

`npm start`

Open browser to localhost:3000

<!--/@-->

<!--@license()-->

## License

[UNLICENCED](./LICENSE) © [Cactus Technologies, LLC](https://www.cactus.is)

<!--/@-->
