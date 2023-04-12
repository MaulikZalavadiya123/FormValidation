const Myproduct = () =>{
    var product = [
        {name:"Apple", price:300, qty:10},
        {name:"Mango", price:200, qty:1},
        {name:"Orange", price:100, qty:5},
        {name:"Grapes", price:400, qty:2},
        {name:"Papaya", price:30, qty:6},
        {name:"Milk", price:30, qty:9}
    ];
    return(
        <div  id="container">
            <h1> {product.length} : Product List </h1>
            <table cellPadding="10" border="1" bordercolor="red">
                <thead>
                    <tr>
                        <th> SI No </th>
                        <th> Book Name </th>
                        <th> Price </th>
                        <th> Quantity </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((pdata, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{pdata.name}</td>
                                    <td>{pdata.price}</td>
                                    <td>{pdata.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Myproduct;