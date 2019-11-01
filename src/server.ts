import app from "./app";
import config from './config.json'


const PORT = config.Api.port

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
