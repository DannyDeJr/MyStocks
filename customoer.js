import { custCollection } from "./myMongo.js";


const getCustomer = (req, res) => {
    custCollection
    .find(
        {},//find every document in the collection
        {
            limit: 15,//grab the first fifteen documents
            sort: { birthdate: -1 }//sorting by specified field in ascending(1) or descending order(-1)
        }
    )
    .project(//specify fields 0 means exclideand 1 means include(_id- is always included by default)
        {
            tier_and_details: 0,
            accounts: 0
        }
    )
        .toArray()//find returns a cursor object, so .toArray to an array of documents
        .then(results => {
            if (!results) {
                res.status(400).json({ "error": "Can't Find Anyone" })
                return
            }
            for (let doc of results) {
                if (doc.name) {
                    let [surname, fisrtname] = doc.name.split(" ")//array bracket is the square brackets
                    doc.firstname = fisrtname
                    doc.surname = surname
                    delete doc.name//delete the name field since we have split it into firstname and surname
                }
            }
            res.status(200).json(results)
        })
}