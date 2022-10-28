const { getAll, getAccount } = require('../database/account')


const getAllAccount = async (req, res) => {
    const data = await getAll();
    return res.status(200).json(data)
}
const getAccountByID = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getAccount(id);
        return res.status(200).json(data)
    }catch(error){
        return res.status(500).send({message : `Internal server Error,\n\n${error}`})
    }
}


module.exports = {
    getAllAccount,
    getAccountByID
}