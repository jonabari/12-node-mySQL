const mysql = require('mysql')
const Table = require('cli-table3')
const inquirer = require('inquirer')

let HOST = 'localhost'
let PORT = 8889
let USER = 'root'
let PASSWORD = 'root'
let DATABASE = 'bamazon'

let referencedTable = 'products'

const connection = mysql.createConnection({
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE
})

connection.connect(function (err) {
    if (err) throw err
    console.log(`\n===> ${USER.toUpperCase()} is now connected at port: ${PORT}\n`)
    displayProducts()
})

function displayProducts() {

    connection.query(`SELECT * FROM ${referencedTable}`, function (err, result, fields) {

        if (err) throw err
        let header = fields.map(h => h.name)
        let products = result.map(Object.values)

        createTable(header, products)
        listenForCustomerRequests(products)
    })
}

function createTable(header, products) {

    let table = new Table({
        head: header, colWidths: [10, 20, 20, 10, 25]
    })
    products.forEach(p => table.push(p))

    console.log(`\n These are the items currently available in ${referencedTable.toUpperCase()}:`)
    console.log(table.toString())
}

function listenForCustomerRequests(products) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: '\nWhat is the item_id of the product you wish to purchase?\n',
        },
    ]).then(function (req) {
        if (parseFloat(req.item_id) >= 1 && parseFloat(req.item_id) <= products.length) {
            purchaseProduct(products, req.item_id)
        } else {
            console.log(`\n===>ERROR: Item not found. Please select a valid item.\n`)
            displayProducts()
        }
    })
}

function purchaseProduct(products, item_id) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'quantity',
            message: '\nHow many do you wish to purchase?\n',
        }
    ]).then(function (req) {
        let selection = products[item_id - 1]
        if (selection[selection.length - 1] >= parseFloat(req.quantity)) {
            connection.query(
                `UPDATE ${referencedTable} SET ? WHERE ?`,
                [
                    {
                        stock_quantity: selection[selection.length - 1] - req.quantity
                    },
                    {
                        item_id: item_id
                    }
                ],
                function (err) {
                    if (err) throw err
                    console.log('\nPurchase succesful!\n')
                    displayProducts()
                }
            )
        } else {
            console.log('\n===> ERROR: Insufficient quantity. Please select a valid amount.\n')
            purchaseProduct(products, item_id)
        }
    })
}