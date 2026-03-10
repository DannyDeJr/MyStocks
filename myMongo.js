import { MongoClient, ServerApiVersion } from "mongodb"
import { MDBURI } from "./config.js";


const client = new MongoClient(MDBURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const clientsDB = client.db("sample_analytics")
const custCollection = clientsDB.collection("customers")
const transCollection = clientsDB.collection("transactions")
const FavesCollection = clientsDB.collection("my_faves")

export { clientsDB, custCollection, transCollection, FavesCollection }