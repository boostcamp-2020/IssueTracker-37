import React from 'react';
// import PropTypes from 'prop-types';

import { StyledLabelTemplate } from './style';

const Template = (props) => {
  const { Header, Navbar, LabelContent } = props;

  return (
    <StyledLabelTemplate>
      <header>{Header}</header>
      <main>
        <nav>{Navbar}</nav>
        <section>{LabelContent}</section>
      </main>
    </StyledLabelTemplate>
  );
};

Template.propTypes = {
  // Header: PropTypes.func,
};

export default Template;
