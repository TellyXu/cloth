// Selection.js

import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Selection = ({title, options, value, onChange}) => {

    return (
        <UncontrolledDropdown>
            <DropdownToggle caret color="secondary">
                {value || title}
            </DropdownToggle>

            <DropdownMenu>
                {options.map(option => (
                    <DropdownItem
                        key={option.value}
                        onClick={() => onChange(option.value)}
                    >
                        {option.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

export default Selection;
