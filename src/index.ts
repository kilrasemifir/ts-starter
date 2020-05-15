
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console,mongoose))
db.once('open',()=>console.log("Open Connection"))

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    createdAt:Date
})

const UserModel = mongoose.model('user', UserSchema)

const process = async () => {
    // Model a sauvegarder
    const user = new UserModel({
        username:"Killian",
        password:"password"
    })

    // Insertion de l'objet dans mongo. Retourne une promise
    let userSaved = user.save()

    // La promise
    console.log(userSaved)

    // L'objet sauvegardé dans mongoDB
    let resultSave = await userSaved;
    console.log("Save",resultSave)
    let resultUpdate = await UserModel.updateOne(
        {_id:resultSave._id}, // Definie la requete pour trouver le document
        {username:"TOTO"}).exec() // Definie le champ a modifier
    console.log("Update",resultUpdate)
    // Recherche le document précédemment sauvegardé
    let resultFId = await UserModel.findById(resultSave._id)
    console.log("FindById",resultFId)

    let resultFAll = await UserModel.find().exec()
    console.log("FindAll",resultFAll)

    // recherche tous les documents ayant username="TOTO"
    let resultFind = await UserModel.find({username:"TOTO"}).exec()
    console.log("Find",resultFind)

    // Suprrime un document ayant un username = TOTO
    await UserModel.deleteOne({username:"TOTO"}).exec();
    // Suprimme tous les documents de la collection
    await UserModel.deleteMany({}).exec()

    
}


//UserModel.find().exec().then(data=>console.log(data))
process()
//clear
UserModel.deleteMany({}).exec()
