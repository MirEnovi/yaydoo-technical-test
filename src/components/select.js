import React from 'react';
import Select from 'react-select';


const SelectedOp = (props) => {
return (
    <Select
    value={props.value}
    onChange={props.onChangeS}
    options={props.options}
    />
);

}

export default SelectedOp;