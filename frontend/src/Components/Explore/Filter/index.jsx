import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import {RangeStepInput} from 'react-range-step-input';
import './styles.css'

const Filter = (props) => {
  const [rangeValue, setRangeValue] = useState(0)

  const onChange = (e) => {
    const newVal = e.target.value;
    setRangeValue({value: newVal});
  }

  return (
    <div>
       <NavDropdown
          className="Filter"
          title={props.name}
          menuVariant="light"
        >
          <NavDropdown.Item > { props.name } </NavDropdown.Item>
          <RangeStepInput
            min={0} 
            max={100}
            value={rangeValue} 
            step={1}
            onChange={onChange}
          />
      </NavDropdown>
    </div>
  );
}

export default Filter;
