import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Table from 'react-bootstrap/Table'
const Grid = (props) => {
    if (props.hasError) {
        return (
            <Alert variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
        </p>
            </Alert>
        )
    } else {
        return (
            <div className="container">
                <Table responsive="md" variant="dark" bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Supplier</th>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.results.map(product => {
                                return (
                                    <tr key={product.productId}>
                                        <td>{product.productId + 1}</td>
                                        <td>{product.supplierName}</td>
                                        <td>{product.product}</td>
                                        <td>£{product.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Grid;