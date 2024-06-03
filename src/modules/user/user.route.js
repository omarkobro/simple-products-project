import { Router } from "express";

import * as userController from './user.controller.js'

let router = Router()


// =================== getAllUsers ===========================
router.get("/" , userController.listUsers)

// =================== addUser ===========================
router.post("/addUser", userController.addUser)


// =================== updateUser ===========================
router.put("/updateUser", userController.updateUser)


// =================== deleteUser ===========================
router.delete("/deleteUser", userController.deleteUser)


// =================== search user with the first letter ===========================
router.get("/SeachByLetter", userController.searchWithFirstLetter)


// =================== search For Users From List Of Ids ===========================
router.get("/getUserById", userController.searchForUsersFromListOfIds)



// =================== Get all users with produts===========================
router.get("/getUserWithProduct", userController.searchForUsersFromListOfIds)




export default router