import React from 'react';
// import PropTypes from 'prop-types';

import { StyledMainTemplate } from './style';

const Template = (props) => {
  const { Header, Navbar, IssueContent } = props;

  return (
    <StyledMainTemplate>
      <header>{Header}</header>
      <main>
        <nav>{Navbar}</nav>
        <section>{IssueContent}</section>
      </main>
    </StyledMainTemplate>
  );
};

Template.propTypes = {
  // Header: PropTypes.func,
};

export default Template;
