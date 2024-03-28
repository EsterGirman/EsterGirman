const usersBLL = require ('../BLL/userBLL')

const express = require("express")

const router = express.Router()


router.get("/", async (req, res) => {
    const users = await usersBLL.getAllUsers()
    return res.status(200).json({users: users})
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const user = await usersBLL.getUserById(id)
    return res.status(200).json({user: user})
})


router.post("/", async (req, res) => {
    try {
        const newUser = req.body
        const status = await usersBLL.addUser(newUser)
        return res.status(201).json({msg: status})
    } catch (error) {
        return res.status(400).json({msg: 'error', error: error})
    }  
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const updatedUser = req.body
    const status = await usersBLL.updateUser(id, updatedUser)
    return res.status(200).json({msg: status})
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const status = await usersBLL.deleteUser(id)
    return res.status(200).json({msg: status})
})

module.exports = router



