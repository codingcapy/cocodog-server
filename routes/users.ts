
/*
author: Paul Kim
date: December 8, 2023
version: 1.0
description: users router for CapySocial2
 */

import express from "express"
const users = express.Router()

import { createUser, getUser, updateUser } from "../controller"

users.route('/').post(createUser)
users.route('/:userId').get(getUser).post(updateUser)

export default users 