import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
}) 

// import express from express;

// const app = express();

// const port = process.env.PORT || 3000;

// import express from express;

// const app = express();
// ;( async () => {
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error", (error) => {
//         console.log("ERROR", error);
//         throw error
//       })

//       app.listen (port, () => {
//         console.log(`App is listening on port https://http://localhost:${port}`);
//       })
//     } catch (error) {
//         console.error("ERROR", error)
//     }
// })()

// this is the first approach but this has added alot of code to the index.js file so the other appproach to this will be that we will make a new file for the connection of the database write a similar code there and then we will import that function here in the index.js file.

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port http://localhost:${process.env.PORT || 8000}`);
        // app.on("error", (error) => {
        //     console.log("error", error); 
        //     throw new error;
        // })
    })
})
.catch((err) => {
    console.log('Error connecting to database', err);
})
