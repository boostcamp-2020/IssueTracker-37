import React from 'react';
import PropTypes from 'prop-types';

import { StyledEditMilestoneTemplate } from './style';

const Template = (props) => {
  const { Header, Navbar, MilestoneForm } = props;

  return (
    <StyledEditMilestoneTemplate>
      <header>{Header}</header>
      <main>
        <nav>{Navbar}</nav>
        <section>{MilestoneForm}</section>
      </main>
    </StyledEditMilestoneTemplate>
  );
};

Template.propTypes = {
  Header: PropTypes.node,
  Navbar: PropTypes.node,
  MilestoneForm: PropTypes.node,
};

export default Template;
