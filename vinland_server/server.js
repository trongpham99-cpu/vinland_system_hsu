const app = require("./src/app");

const PORT = process.env.PORT || 3003

const server = app.listen(PORT, () => {
    console.log(`Server is running with PORT ${PORT}!!!`)
})

// process.on('SIGINT', () => {
//     server.close(() => { console.log(`Exit Server Express`) })
// })