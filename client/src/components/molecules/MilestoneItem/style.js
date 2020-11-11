import styled from 'styled-components';

export const StyledMilestoneItem = styled.div`
  display: flex;
  padding: 0 30px;
  width: 100%;

  & > div {
    margin: 10px 0;
    padding: 10px;
    display: flex;
    width: 50%;
    flex-direction: column;
  }

  & > div > div {
    margin: 5px 0;
  }

  & .rate {
    margin-top: 10px;
  }

  & .states > span {
    margin-right: 20px;
  }

  & .buttons > span {
    margin-right: 10px;
    cursor: pointer;
  }

  & .title > span {
    font-size: large;
  }

  & .dueDate {
    padding: 0;
    pointer-events: none;
  }

  & .description {
  }
`;

//  & .description {
//   overflow: hidden;
//   text - overflow: ellipsis;
//   white - space: nowrap;
//   width: 90 %;
// }
