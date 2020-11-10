import React from 'react';
import PropTypes from 'prop-types';

import { StyledMilestoneTemplate } from './style';

const Template = (props) => {
  const { Header, Navbar, LabelContent } = props;

  return (
    <StyledMilestoneTemplate>
      <header>{Header}</header>
      <main>
        <nav>{Navbar}</nav>
        <section>{LabelContent}</section>
      </main>
    </StyledMilestoneTemplate>
  );
};

Template.propTypes = {
  Header: PropTypes.node,
  Navbar: PropTypes.node,
  LabelContent: PropTypes.node,
};

export default Template;
