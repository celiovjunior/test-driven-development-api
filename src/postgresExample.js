async function main() {
    
    // await Employees.create({
    //     name: 'lorena',
    //     role: 'bartender'
    // })
    const result = await Employees.findAll({ raw: true, attributes: ['name'] })
    console.log('result', result)
}

main()