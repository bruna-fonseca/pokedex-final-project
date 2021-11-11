import React, { useState, useEffect, useContext } from 'react';

import NavBar from '../components/NavBar';

import ThemeContext from '../context/ThemeContext';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Title, StyledButton } from '../styles/styles';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function About() {
  const [value, setValue] = useState(0);
  const { definedTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Sobre a equipe';
  }, []);

  const CONTENT_TAB_STYLES = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    margin: '0 auto',
    color: definedTheme.typography,
  }  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavBar />
    <Box style={{ backgroundColor: definedTheme.background }} sx={{ width: '100%', height: '100vh' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs
            TabIndicatorProps={{
              style: { backgroundColor: "#F2243A" }}} 
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
        >
          <Tab style={{ color:  definedTheme.typography }} label="Sobre o Grupo" {...a11yProps(0)} />
          <Tab style={{ color:  definedTheme.typography }} label="Aieychan Karoline" {...a11yProps(1)} />
          <Tab style={{ color:  definedTheme.typography }} label="Beatriz Nogueira" {...a11yProps(2)} />
          <Tab style={{ color:  definedTheme.typography }} label="Bruna Fonseca" {...a11yProps(3)} />
          <Tab style={{ color:  definedTheme.typography }} label="Otávio Falcão" {...a11yProps(4)} />

        </Tabs>
      </Box>
      <TabPanel style={CONTENT_TAB_STYLES } value={value} index={0}>
        <Title fontColor={ definedTheme.typography }>Grupo 5 da turma 2 de front-end</Title>
        <p>Projeto Final - Pokédex</p>
      </TabPanel>
      <TabPanel style={CONTENT_TAB_STYLES} value={value} index={1}>
        <Title fontColor={ definedTheme.typography }>Aieychan Karoline</Title>
      </TabPanel>
      <TabPanel style={CONTENT_TAB_STYLES} value={value} index={2}>
         <Title fontColor={ definedTheme.typography }>Beatriz Nogueira</Title>
      </TabPanel>
      <TabPanel style={CONTENT_TAB_STYLES} value={value} index={3}>
        <Title fontColor={ definedTheme.typography }>Bruna Fonseca</Title>
        <p>23 anos. Recifancy - PE</p>
        <p style={{ marginBottom: '20px' }}>Estudante de desenvolvimento web front-end com conhecimentos
          em HTML, CSS, Javascript, React, Vuejs e Nodejs.
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
        <a
          style={{ color: '#FFF', textDecoration: 'none' }}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/fonseca-bruna/">
              <StyledButton style={{ marginRight: '10px' }}>
              LinkedIn
              </StyledButton>
          </a>
          <a
            style={{ color: '#FFF', textDecoration: 'none'}}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bruna-fonseca">
              <StyledButton>
                Github
              </StyledButton>
        </a>
        </div>
      </TabPanel>
      <TabPanel style={CONTENT_TAB_STYLES} value={value} index={4}>
      <Title fontColor={ definedTheme.typography }>Otávio Falcão</Title>
      </TabPanel>
    </Box>
    </div>
  );
}