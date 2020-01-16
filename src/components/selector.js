import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
const Selector = (props) => {
    if (props.suppliers && props.suppliers.length > 0) {
        return (
            <div className="container">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Suppliers
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {

                            props.suppliers.map(supplier => {
                                return (<Dropdown.Item eventKey={supplier.supplierId} key={supplier.supplierId} onSelect={props.handleSelect}>{supplier.name}</Dropdown.Item>)
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    } else {
        return (<p>no items</p>)
    }
}
export default Selector