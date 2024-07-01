import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, TabsProps } from '@mui/material';

export interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<ITabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export interface ITabsComponentProps extends TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const TabsComponent: React.FC<ITabsComponentProps> = ({ tabs, ...tabsProps }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <div>
      <Tabs value={tabIndex} onChange={handleChange} {...tabsProps}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} id={`tab-${index}`} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={tabIndex} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

export default TabsComponent;
