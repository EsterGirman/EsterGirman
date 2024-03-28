const vaccinationsModel = require('../Models/vaccinationsModel')

const getAllVaccinations = async() => {
    const vaccinations = await vaccinationsModel.find({})
    return vaccinations
}
const getVaccinationById = async(id) => {
    const vaccination = await vaccinationsModel.findById(id)
    return vaccination
}

const addVaccinations = async(vaccinations) => {
    const finalVaccinations = new vaccinationsModel(vaccinations)
    await finalVaccinations.save()
    return 'created'
}
const updateVaccinations = async(id, vaccinations) => {
    await vaccinationsModel.findByIdAndUpdate(id, vaccinations)
    return 'updated'

}
const deleteVaccinations = async(id) => {
    await vaccinationsModel.findByIdAndDelete(id)
    return 'deleted'

}



module.exports = {getAllVaccinations, getVaccinationById, addVaccinations, updateVaccinations, deleteVaccinations}