
![Logo](https://res.cloudinary.com/dicbnntfh/image/upload/v1672067747/spotify-clone/1_zeddoy.png)


# [Admin Dashboard](https://admin-dashboard-mern-as.netlify.app/)

The Admin Dashboard is a web application designed for businesses and organizations 
to manage and track key performance indicators (KPIs). The dashboard provides an overview of important metrics and data.  


## Features

- Entirely Responsive, supports Light / Dark Mode 
- Used RTK Query for data fetching, caching 
- Using Mock data from Mongo DB
- Using Mongo DB aggregation for grouping multiple document together

## Pages 
- Dashboard: View and analyze key performance indicators such as revenue, sales, and customer 
- Products: Get the information about the product (name, price, rating, description)
- Customers: Get the list of the customers 
- Transactions: Get the list of the transactions
- Geography: Get to know about the distribution of the customers in whole world using world map
- Sales: Get to know about the sales (daily, monthly, yearly, by category)
- Admin: Get the list of the admins 
- Performance: Get to know how a particular Seller is performing 


## Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)
- [Material UI X](https://mui.com/x/introduction/)
- [Nivo](https://nivo.rocks/)
- [NodeJs](https://nodejs.org/en/docs/)
- [ExpressJs](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)




## Run Locally

Clone the project

```bash
  git clone https://github.com/anshkush92college/admin-dashboard-mern
```

Go to the project directory

```bash
  cd admin-dashboard-mern
```

### Client 

Go to the client directory
```bash
  cd client
```

Install dependencies

```bash
  npm install 
```

Add .env file
```bash
REACT_APP_BASE_URL=""
```

Start the server
```bash
npm run start
```

### Server 
Go to the server directory
```bash
  cd server
```

Install dependencies

```bash
  npm install 
```

Add .env file
```bash
MONGODB_URI=""
PORT=""
```

Start the server
```bash
npm run dev
```

## Author

- [Ansh Singh](https://www.github.com/anshkush92college)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Roadmap

- Add the register / login feature
- Ability to add the custom data instead of using the mock data

