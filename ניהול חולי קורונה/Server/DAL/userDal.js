const userModel = require('../Models/userModel')

const getAllUsers = async() => {
    const users = await userModel.find({})
    return users
}
const getUserById = async(id) => {
    const user = await userModel.findById(id)
    return user
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