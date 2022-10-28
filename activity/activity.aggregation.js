
//Employee


/* 1 */
{
    "_id" : "312456",
    "employee name" : "joongki song",
    "employee age" : 28,
    "job role" : "store manager",
    "salary" : 120000
}

/* 2 */
{
    "_id" : "345342",
    "employee name" : "joongkuk seon",
    "employee age" : 25,
    "job role" : "store associate",
    "salary" : 45000
}

/* 3 */
{
    "_id" : "334566",
    "employee name" : "jin kim",
    "employee age" : 35,
    "job role" : "cashier",
    "salary" : 67000
}

/* 4 */
{
    "_id" : "245345",
    "employee name" : "hyekyo song",
    "employee age" : 40,
    "job role" : "senior cashier",
    "salary" : 72500
}

/* 5 */
{
    "_id" : "445364",
    "employee name" : "tae hyung kim",
    "employee age" : 40,
    "job role" : "store associate",
    "salary" : 35000
}


//Inventory


/* 1 */
{
    "_id" : "LS0000123",
    "name" : "xyz chocolate bar 100g",
    "price" : 5.23,
    "quantity" : 25000,
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
}

/* 2 */
{
    "_id" : "LS0003123",
    "name" : "milk non-fat 1lt",
    "price" : 3.0,
    "quantity" : 1000,
    "category" : [ 
        "dairy", 
        "healthy"
    ]
}

/* 3 */
{
    "_id" : "LS0004566",
    "name" : "eggs 12pack",
    "price" : 6.0,
    "quantity" : 5000,
    "category" : [ 
        "poultry", 
        "generic"
    ]
}

/* 4 */
{
    "_id" : "LS0008542",
    "name" : "whole chicken",
    "price" : 12.59,
    "quantity" : 1250,
    "category" : [ 
        "poultry ", 
        "meat"
    ]
}

/* 5 */
{
    "_id" : "LS0018542",
    "name" : "carrots (packed) 250g",
    "price" : 3.5,
    "quantity" : 3000,
    "category" : [ 
        "vegetables", 
        "healthy", 
        "organic"
    ]
}

/* 6 */
{
    "_id" : "LS0009846",
    "name" : "beans (packed) 250g",
    "price" : 6.75,
    "quantity" : 6000,
    "category" : [ 
        "vegatables", 
        "healthy", 
        "organic"
    ]
}

/* 7 */
{
    "_id" : "LS0009100",
    "name" : "bell pepper (packed) 250g",
    "price" : 4.95,
    "quantity" : 12000,
    "category" : [ 
        "vegatables", 
        "healthy", 
        "organic"
    ]
}

/* 8 */
{
    "_id" : "LS0002688",
    "name" : "zz butter 500g",
    "price" : 25.0,
    "quantity" : 500,
    "category" : [ 
        "dairy", 
        "healthy", 
        "premium"
    ]
}

//Payments


/* 1 */
{
    "_id" : "BL2021005",
    "gross amount" : 105.65,
    "discounts" : 10.0,
    "net amount" : 95.65,
    "date/time" : ISODate("2021-01-01T16:00:00.000Z")
}

/* 2 */
{
    "_id" : "BL2021006",
    "gross amount" : 45.25,
    "discounts" : 0.0,
    "net amount" : 45.25,
    "date/time" : ISODate("2021-01-01T16:15:55.000Z")
}

/* 3 */
{
    "_id" : "BL2021007",
    "gross amount" : 153.33,
    "discounts" : 20.33,
    "net amount" : 133.0,
    "date/time" : ISODate("2021-01-01T16:31:08.000Z")
}

/* 4 */
{
    "_id" : "BL2021008",
    "discounts" : 0.0,
    "net amount" : 21.0,
    "date/time" : ISODate("2021-01-01T20:25:52.000Z"),
    "gross amount" : 21.0
}

/* 5 */
{
    "_id" : "BL2021009",
    "gross amount" : 89.72,
    "discounts" : 0.72,
    "net amount" : 89.0,
    "date/time" : ISODate("2021-01-01T08:45:12.000Z")
}

/* 6 */
{
    "_id" : "BL2021010",
    "gross amount" : 33.5,
    "discounts" : 20.5,
    "net amount" : 13.0,
    "date/time" : ISODate("2021-01-01T11:02:35.000Z")
}

//Promo

/* 1 */
{
    "_id" : "PROMO01",
    "name" : "sales promo",
    "period" : 7.0,
    "dailysales" : [ 
        20, 
        50, 
        12, 
        30, 
        45, 
        15, 
        60
    ]
}

/* 2 */
{
    "_id" : "PROMO02",
    "name" : "milk promo",
    "period" : 2.0,
    "dailysales" : [ 
        120, 
        200
    ]
}

/* 3 */
{
    "_id" : "PROMO03",
    "name" : "meat promo",
    "period" : 3.0,
    "dailysales" : [ 
        101, 
        205
    ]
}

/* 4 */
{
    "_id" : "PROMO04",
    "name" : "new year promo",
    "period" : 7.0,
    "dailysales" : [ 
        68, 
        88, 
        105, 
        188, 
        74, 
        278, 
        350
    ]
}