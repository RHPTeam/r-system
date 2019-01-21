# Documentation API R-System

> The R-System is an idea that comes from the RHP Team members. The system uses Node.js as the core to write API and use Vue.js as a framework for users. The team implemented this system to create a place to store the products that members created. At the same time, Team integrates a system of questioning and answering for everyone, this idea is in part for members to practice skills and also contribute products to the community.

## Why do we agree what api returns?
Each project will have a different variation of data. If you are an api code writer, then you will know, many people making api will cause different data returns. Therefore, below is the consistency of the members in the team when returning:
```js
res.json({
	data: data,
	status: 200, // 200, 201, 403, 404, 500
	message: "Your message for response's results",
	loading: true || false // This property define a value to status. Example: if status = 200, loading: false.
})
```

## Why do models just define each type of data?
The team time to perform system analysis is not enough time to implement this part uniformly. Therefore, when implementing the API, the members will have to define this themselves.
> Please note again if you think it is important to develop and change the data in models.

## How to clone project?
Project setup all package
```
npm install
```

Run for production
```
npm run start
```

Run for development
```
npm run dev
```

### Reade more info about api server
See [more](https://discord.gg/QcQ43eC).