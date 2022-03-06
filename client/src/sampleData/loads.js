let loadsDataSet = [
    {
        invoiceNumber: 'A4224',
        id:'01',
        loadNumber: '004234',
        brokerName: 'Total Quality Logistics',
        rate: '1000',
        loadType: 'van',
        commodity: 'Water Bottles',
        weight: '39000',
        driver: '1',
        date:{
            pickup:{
                day:"MON",
                date: "10",
                month: "JAN"
            },
            delivery:{
                day:"MON",
                date: "10",
                month: "JAN"
            }
        },
        pickup:{
            city: 'west palm beach',
            state: 'FL',
            zip: '4406'
        },
        delivery:{
            city:'Charlestown',
            state: 'PA',
            zip: '4441'
        },
        miles: '925',
        notes: 'Lumper Paid By Driver.'
    },
    {
        invoiceNumber: '0045',
        id:'02',
        loadNumber: 'A4A84',
        brokerName: 'Scotts Logistics',
        rate: '500',
        loadType: 'Reefer',
        commodity: 'Chicken',
        weight: '42000',
        driver: '2',
        date:{
            pickup:{
                day:"MON",
                date: "10",
                month: "JAN"
            },
            delivery:{
                day:"MON",
                date: "10",
                month: "JAN"
            }
        },
        pickup:{
            city: 'Lumberton',
            state: 'NY',
            zip: '45032'
        },
        delivery:{
            city:'Atlanta',
            state: 'GA',
            zip: '555043'
        },
        miles: '632',
        notes: 'Lumper Paid by broker.'
    },
    {
        invoiceNumber: '00213',
        id:'03',
        loadNumber: 'AA4242',
        brokerName: 'Beemac Logistics',
        rate: '2300',
        loadType: 'flatbed',
        commodity: 'tires',
        weight: '25000',
        driver: '3',
        date:{
            pickup:{
                day:"MON",
                date: "10",
                month: "JAN"
            },
            delivery:{
                day:"MON",
                date: "10",
                month: "JAN"
            }
        },
        pickup:{
            city: 'Atlanta',
            state: 'GA',
            zip: '33495'
        },
        delivery:{
            city:'Lewisport',
            state: 'VA',
            zip: '35201'
        },
        miles: '620',
        notes: 'There was two picks.'
    },
    {
        invoiceNumber: '003143',
        id:'04',
        loadNumber: 'AA42A',
        brokerName: 'Megacorp',
        rate: '3200',
        loadType: 'reefer',
        commodity: 'Frozen Chicken',
        weight: '42500',
        driver: '1',
        date:{
            pickup:{
                day:"MON",
                date: "10",
                month: "JAN"
            },
            delivery:{
                day:"MON",
                date: "10",
                month: "JAN"
            }
        },
        pickup:{
            city: 'west palm beach',
            state: 'FL',
            zip: '4406'
        },
        delivery:{
            city:'Pheonix',
            state: 'AR',
            zip: '33405'
        },
        miles: '2500',
        notes: 'Add Layover.'
    }
]


export default loadsDataSet