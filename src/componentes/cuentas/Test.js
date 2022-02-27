
export const test = [
    {
        folio:"20221",
        fechai:"01-02-2022",
        nombre:"Juan",
        apellido:"Pérez",
        habitacion:"101",
        cargos: [
            {
                folio:"1",
                cuenta_id:"20221",
                habitacion:"101",
                fecha:"05-02-2022",
                concepto:"Servicio1",
                referencia: "123",
                importe: "$100.00",
                total: "$116.00",
                pagado: 0
            },
            {
                folio:"2",
                cuenta_id:"20221",
                fecha:"05-02-2022",
                habitacion:"101",
                concepto:"Servicio2",
                referencia: "123",
                importe: "$150.00",
                total: "$174.00",
                pagado: 0
            }
        ],
        subtotal:"$1,900.00",
        total:"$2,204.00"
    },
    {
        folio:"20222",
        fechai:"05-02-2022",
        nombre:"Juan",
        apellido:"Pérez",
        habitacion:"106",
        cargos: [
            {
                folio:"1",
                cuenta_id:"20222",
                habitacion:"106",
                fecha:"05-02-2022",
                concepto:"Servicio1",
                referencia: "123",
                importe: "$100.00",
                total: "$116.00",
                pagado: 1
            },
            {
                folio:"2",
                fecha:"05-02-2022",
                cuenta_id:"20222",
                habitacion:"106",
                concepto:"Servicio2",
                referencia: "123",
                importe: "$150.00",
                total: "$174.00",
                pagado: 1
            }
        ],
        subtotal:"$1,900.00",
        total:"$2,204.00"
    }
];

    