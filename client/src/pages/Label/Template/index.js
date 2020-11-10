import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabelTemplate } from './style';

const Template = (props) => {
  const { Header, Navbar, LabelContent, LabelForm } = props;

  return (
    <StyledLabelTemplate>
      <header>{Header}</header>
      <main>
        <nav>
          {Navbar}
          {LabelForm}
        </nav>
        <section>{LabelContent}</section>
      </main>
    </StyledLabelTemplate>
  );
};

Template.propTypes = {
  Header: PropTypes.node,
  Navbar: PropTypes.node,
  LabelContent: PropTypes.node,
  LabelForm: PropTypes.node,
};

export default Template;
