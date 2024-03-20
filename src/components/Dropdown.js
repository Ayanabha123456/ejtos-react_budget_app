import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from '../context/AppContext';

const DropdownComponent = () => {
    const { currency } = useContext(AppContext)
    const {currency_type} = useContext(AppContext)
    const { dispatch } = useContext(AppContext)

    const changeCurrency = (val) => {
        const currency_info = {
            currency: val.substring(0,1),
            currency_type: val.substring(2),
        };
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency_info,
        });
    }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Currency ({currency} {currency_type})
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="" name="$ Dollar" value="$ Dollar" onMouseOver={() => changeCurrency("$ Dollar")}>$ Dollar</Dropdown.Item>
        <Dropdown.Item href="" name="£ Pound" value="£ Pound" onMouseOver={() => changeCurrency("£ Pound")}>£ Pound</Dropdown.Item>
        <Dropdown.Item href="" name="€ Euro" value="€ Euro" onMouseOver={() => changeCurrency("€ Euro")}>€ Euro</Dropdown.Item>
        <Dropdown.Item href="" name="₹ Ruppee" value="₹ Ruppee" onMouseOver={() => changeCurrency("₹ Ruppee")}>₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
