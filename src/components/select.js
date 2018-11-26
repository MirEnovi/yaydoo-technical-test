import React from 'react';
import Select from 'react-select';


const SelectedOp = (props) => {

return (
    <Select
    value='pais'
    onChange={props.onChange}
    options={props.options}
    />
);

}

export default SelectedOp;