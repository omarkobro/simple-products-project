import DB_connection from "../../../DB/connection.js"

// =================== getAllUsers ===========================

export let listUsers = (req,res)=>{
    DB_connection.execute(`SELECT * FROM users_tbl`,(err,result,fields) => {
        if(err){
            return res.json(
                {
                    message: "Query Failed",
                    error: err
                }
            )
        } 
        if(result.length){
            return res.json({
                message: "Query Successed ",
                status: "200",
                users: result
            })
        }
        return res.json({
            message:"empty tabel",
            status: 200,
            users: result
        })
    }) 
}

// =================== addUser ===========================
export let addUser = (req,res)=>{
    let {name, email,password,age} = req.body
    let selectQuerybyEmail = `select * from users_tbl where email = '${email}'`
    let insertQuery = `insert into users_tbl (name,email,password,age) values ('${name}', '${email}', '${password}', ${age} )`

    DB_connection.execute(selectQuerybyEmail, (err,result,fields)=>{
        if(err){
            return res.json({
                message: "Query Failed ",
                error: err
            })
        }
        if(result.length){
            return res.json({
                message: "Email Already Exists try another email address ",
                
            })
        }
        
        DB_connection.execute(insertQuery, (err,result,fields)=>{
            if(err){
                return res.json({
                    message: "Query Failed ",
                    error: err
                })
            }
            console.log(result);
            if(!result.affectedRows){
                res.json({
                    message : "failed",
                    status: 400 , 
                    users: result
                })
            }
            return res.json({
                message: "Query Successed ",
                status: "200",
                users: result
            })
        })
    })
}

// =================== updateUser ===========================

export let updateUser = (req,res)=>{
    let {name, email,password,age,id} = req.body
    let updateUserQuery = `update users_tbl set name = '${name}', email ='${email}', password ='${password}', age =${age} where id = ${id} `
    DB_connection.execute(updateUserQuery, (err,result,fields)=>{
        if(err){
            return res.json(
                {
                    message: "Query Failed",
                    error: err
                }
            )
        }
        else{
            return res.json({
                message: "Query Successed ",
                status: "200",
                users: result
            })
        }
    })
}

// =================== deleteUser ===========================

export let deleteUser = (req,res)=>{
    let {id} = req.body
    let deleteUserQuery = `delete from users_tbl where id = ${id};`
    DB_connection.execute(deleteUserQuery, (err,result,fields)=>{
        if(err){
            return res.json(
                {
                    message: "Query Failed",
                    error: err
                }
            )
        }
        else{
            return res.json({
                message: "Query Successed ",
                status: "200",
                users: result
            })
        }
    })
}

// =================== search user with the first letter ===========================

export let searchWithFirstLetter = (req,res)=>{
    let {letter} = req.body

    let searchWithFirstLetterQuery = `SELECT * FROM users_tbl WHERE name LIKE '${letter}%'`
    DB_connection.execute(searchWithFirstLetterQuery, (err,result,fields)=>{
        if(err){
            return res.json(
                {
                    message: "Query Failed",
                    error: err
                }
            )
        }
        else{
            console.log(result);
            return res.json({
                message: "Query Successed ",
                status: "200",
                users: result
            })
        }
    })
}
// =================== search For Users From List Of Ids ===========================

export let searchForUsersFromListOfIds = (req,res)=>{
    let {ids} = req.body

    let searchWithFirstLetterQuery = `SELECT * FROM users_tbl
    WHERE id IN ('${ids}');
    `
    DB_connection.execute(searchWithFirstLetterQuery, (err,result,fields)=>{
        if(err){
            return res.json(
                {
                    message: "Query Failed",
                    error: err
                }
            )
        }
        else{
            console.log(result);
            return res.json({
                message: "Query Successed ",
                status: "200",
                users: result
            })
        }
    })
}
// =================== Get all users with produts===========================

export let getAllUsersWithProudcts = (req,res)=>{

    let searchForUsersWithProducts = `SELECT * FROM users_tbl INNER JOIN products_tbl ON users_tbl.email = products_tbl.p_CreatedBy
    `
    DB_connection.execute(searchForUsersWithProducts, (err,result,fields)=>{
        if(err){
            return res.json(
                {
                    message: "Query Failed",
                    error: err
                }
            )
        }
        else{
             // the query is running and providing correcet output in sql but i can't get the result here and it keeps coming as an empty array !!
            console.log(res);
            return res.json({
                message: "Query Successed ",
                status: "200",
                users: result
            })
        }
    })
}
