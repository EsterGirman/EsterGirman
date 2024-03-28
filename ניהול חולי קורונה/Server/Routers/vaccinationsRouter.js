const vaccinationsBLL = require ('../BLL/vaccinationsBLL')

const express = require("express")

const router = express.Router()


router.get("/", async (req, res) => {
    const vaccinations = await vaccinationsBLL.getAllVaccinations()
    return res.status(200).json({vaccinations: vaccinations})
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const vaccination = await vaccinationsBLL.getVaccinationById(id)
    return res.status(200).json({vaccination: vaccination})
})


router.post("/", async (req, res) => {
    try {
        const newVaccination = req.body
        const status = await vaccinationsBLL.addVaccinations(newVaccination)
        return res.status(201).json({msg: status})
    } catch (error) {
        return res.status(400).json({msg: 'error', error: error})
    }  
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const updatedVaccination = req.body
    const status = await vaccinationsBLL.updateVaccinations(id, updatedVaccination)
    return res.status(200).json({msg: status})
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const status = await vaccinationsBLL.deleteVaccinations(id)
    return res.status(200).json({msg: status})
})

module.exports = router



