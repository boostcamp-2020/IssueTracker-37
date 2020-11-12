import React from 'react';
import PropTypes from 'prop-types';

import { StyledCreateMilestoneTemplate } from './style';

const Template = (props) => {
  const { Header, SubHeader, MilestoneForm } = props;

  return (
    <StyledCreateMilestoneTemplate>
      <header>{Header}</header>
      <main>
        <header>{SubHeader}</header>
        <section>{MilestoneForm}</section>
      </main>
    </StyledCreateMilestoneTemplate>
  );
};

Template.propTypes = {
  Header: PropTypes.node,
  SubHeader: PropTypes.node,
  MilestoneForm: PropTypes.node,
};

export default Template;
