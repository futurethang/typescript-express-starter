"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;
exports.dbConnection = {
    url: `mongodb+srv://kphyde:Shizkank@2@cluster0.car3h.mongodb.net/movieChoice?retryWrites=true&w=majority`,
    // url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
};
//# sourceMappingURL=index.js.map