import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Tabs as MaterialTabs } from '@material-ui/core/';
import Tab from '@material-ui/core/Tab';
import { Wrapper } from './Tabs.styles';

const Tabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <MaterialTabs value={value} onChange={handleChange}>
        <Tab label="1" />
        <Tab label="2" />
        <Tab label="3" />
      </MaterialTabs>
    </Wrapper>
  );
};

Tabs.propTypes = {};

export default Tabs;
