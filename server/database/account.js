const { db } = require('./config')



const getAll = async () => {
    let data = [];
    const dataRef = db.collection('Account');
    const snapshot = await dataRef.get();
    snapshot.forEach(doc => {
        data.push({
            id: doc.id,
            data: doc.data()
        })
    });
    return data
}

const getAccount = async (id) => {
    let data;
    const dataRef = db.collection('Account').doc(id)
    await dataRef.get()
        .then(doc => {
            data = {
                id : doc.id,
                data : doc.data()
            }
        })
    return data;
}




module.exports = {
    getAll,
    getAccount
}