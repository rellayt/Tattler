import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { Wrapper } from './Tabs.styles';
import { Tab } from '../../atoms/Tab/Tab';
import { useParams } from 'react-router/';
import { Link } from 'react-router-dom';

const PublicChannelTabs = ({ channelId }) => {
  const [activeTab, setActiveTab] = React.useState(channelId - 1);

  const handleChange = (e, activeTab) => setActiveTab(activeTab);
  return (
    <Wrapper>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab label="1" value={0} to={'1'} component={Link} />
        <Tab label="2" value={1} to={'2'} component={Link} />
        <Tab label="3" value={2} to={'3'} component={Link} />
      </Tabs>
    </Wrapper>
  );
};

export default PublicChannelTabs;
