const { MONGO_HOST, MONGO_DATABASE, MONGO_CREDS } = process.env;

export const dbConnection = {
  url: `mongodb+srv://${MONGO_CREDS}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};

