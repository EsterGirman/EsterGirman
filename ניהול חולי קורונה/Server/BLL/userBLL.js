const userModel = require('../Models/userModel')
const vaccinationsBLL = require('../BLL/vaccinationsBLL')

const getAllUsers = async() => {
    const users = await userModel.find({})
    const finalUsers = await Promise.all(
        users.map(async(user) => {
            const finalUser = await formmatingUser(user)
            return finalUser
        })
    )
    return finalUsers
}

const formmatingUser = async(user) => {
    let userWithKoronaDetails = {}

    userWithKoronaDetails = {
        _id: user._id.toString(),
        firstname: user.firstname,
        lastname: user.lastname,
        id: user.id,
        phone: user.phone,
        mobilePhone: user.mobilePhone,
        address: user.address,
        Date_of_receiving_positive_answer: user.Date_of_receiving_positive_answer,
        dateOfRecovery: user.dateOfRecovery
    }

    const arrayKoronaDetails = await Promise.all(
        user.Korona?.map(async(k) => {
            const koronaDetails = await vaccinationsBLL.getVaccinationById(k)
            return koronaDetails
        })
    )
    userWithKoronaDetails.Korona = arrayKoronaDetails
    return userWithKoronaDetails

}

const getUserById = async(id) => {
    const user = await userModel.findById(id)
    const finalUser = await formmatingUser(user)
    return finalUser
}

const addUser = async(user) => {
    const finalUser = new userModel(user)
    await finalUser.save()
    return 'created'
}
const updateUser = async(id, user) => {
    await userModel.findByIdAndUpdate(id, user)
    return 'updated'

}
const deleteUser = async(id) => {
    await userModel.findByIdAndDelete(id)
    return 'deleted'

}

module.exports = {getAllUsers, getUserById, addUser, updateUser, deleteUser}
