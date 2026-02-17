import { custCollection } from "./myMongo.js";


const getCustomer = (req, res) => {
    custCollection.find(
        {},
        {
            limit: 15,
            sort: { birthdate: -1 },
        }
    )
    .project(
        {
            tier_and_details: 0,
            accounts: 0
        }
    )
        .toArray()
        .then(results => {
            if (!results) {
                res.status(400).json({ "error": "Can't Find Anyone" })
                return
            }
            for (let doc of results) {
                if (doc.name) {
                    let [surname, fisrtname] = doc.name.split(" ")
                    doc.firstname = fisrtname
                    doc.surname = surname
                    delete doc.name
                }
            }
            res.status(200).json(results)
        })
}