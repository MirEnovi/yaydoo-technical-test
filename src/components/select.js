import React from 'react';
import Select from 'react-select';


const SelectedOp = (props) => {
    console.log(props);
const { selectedOption } = props.selectedOption;

return (
    <Select
    value={selectedOption}
    onChange={props.handleChange}
    options={props.options}
    />
);

}

export default SelectedOp;