import DB_connection from "../../../DB/connection.js"


// =================== add produts===========================
export let addUProduct = (req,res)=>{
    let {p_Name, p_Description,p_Price,p_Createdby} = req.body

    let selectQuerybyEmail = `select * from products_tbl where p_Name = '${p_Name}'`
    let insertQuery = `insert into products_tbl (p_Name,p_Description,p_Price,p_Createdby) values ('${p_Name}', '${p_Description}', ${p_Price}, '${p_Createdby}' )`

    DB_connection.execute(selectQuerybyEmail, (err,result,fields)=>{
        if(err){
            return res.json({
                message: "Query Failed ",
                error: err
            })
        }

        if(result.length){
            return res.json({
                message: "Product Already Exists",
                
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

// =================== get ALL produts===========================
export let getAllProducts = (req,res)=>{
    DB_connection.execute(`SELECT * FROM products_tbl`,(err,result,fields) => {
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

// =================== deleteProduct ===========================
export let deleteProduct = (req,res)=>{
    let {email,p_Name} = req.body
    let deleteUserQuery = `DELETE products_tbl FROM products_tbl INNER JOIN users_tbl ON products_tbl.p_CreatedBy = '${email}}'  WHERE products_tbl.p_Name = '${p_Name}'`
    DB_connection.execute(deleteUserQuery, (err,result,fields)=>{
        if(err){
            return res.json(
                {
                    message: "Query Failed",
                    error: err
                }
            )
        }
        if(result.affectedRows == 0){
            return res.json({
                message: "Product doesn't exist ",
            })
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

// =================== updateProduct ===========================
export let updateProduct = (req,res)=>{
    let {p_Name, p_Description,p_Price,p_Createdby,id} = req.body
    let updateUserQuery = `update products_tbl set p_Name = '${p_Name}', p_Description ='${p_Description}', p_Price =${p_Price}, p_Createdby ='${p_Createdby}' where id = ${id} `
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

// =================== search for products by price ===========================
export let searchByPrice = (req,res)=>{
    let {p_Price} = req.body
    let searchByPriceQuery = `select * from products_tbl where p_Price < ${p_Price}`
    DB_connection.execute(searchByPriceQuery, (err,result,fields)=>{
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
