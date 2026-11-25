import { config } from "./src/config/config.js";
import app from "./src/app.js";
import connectToDb from "./src/config/db.js";

const PORT = config.PORT;

const startServer = async ()=>{
    try {
        await connectToDb();
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log("failed to start the server,",error.message)
        process.exit(1);
    }
}

startServer();