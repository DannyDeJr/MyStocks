import { FavesCollection } from "./myMongo.js"


const addtoFaves = (res, custID) => {
    FavesCollection
    .countDocuments({ "custID": custID})
    .then(counted => {
        if (counted > 0) {
            res.status(200).json({message: `Customer ID: ${custID} is already added.` })
            return
        } 
        FavesCollection
        .insertOne({ "custID": custID })
        .then(result => {
            if (result.insertedId) 
                res.status(200).json({message: "Customer added to favourits." })
            else 
                res.status(400).json({message: "An error to add Customer to favourites." })
            })
        })
}
const deleteFromFaves = (res, custID) => {
    FavesCollection
    .countDocuments({ "custID": custID})
    .then(counted => {
        if (counted === 0) {
            res.status(200).json({message: `Customer ID: ${custID} doesn't exist.` })
            return
        }
        FavesCollection
        .deleteOne({ "custID": custID })
        .then(result => {
            if (result.acknowledged) 
                res.status(200).json({message: "Deleted successfully." })
            else 
                res.status(400).json({message: "An error occurred while deleting that Customer." })
        })
    })
}

export { addtoFaves, deleteFromFaves }