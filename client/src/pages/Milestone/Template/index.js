import React from 'react';
import PropTypes from 'prop-types';

import { StyledMilestoneTemplate } from './style';

const Template = (props) => {
  const { Header, Navbar, MilestoneContent } = props;

  return (
    <StyledMilestoneTemplate>
      <header>{Header}</header>
      <main>
        <nav>{Navbar}</nav>
        <section>{MilestoneContent}</section>
      </main>
    </StyledMilestoneTemplate>
  );
};

Template.propTypes = {
  Header: PropTypes.node,
  Navbar: PropTypes.node,
  MilestoneContent: PropTypes.node,
};

export default Template;
