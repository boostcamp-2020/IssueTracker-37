import styled from 'styled-components';

export const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 50px;
  margin-bottom: 20px;

  & > img {
    position: absolute;
    top: 0;
    left: -50px;
  }
`;

export const StyledItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 10px;
  border: 1px solid ${(props) => (props.type ? '#79b8ff' : '#959da5')};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${(props) => (props.type ? '#dbedff' : '#f6f8fa')};
`;

export const StyledItem = styled.div`
  border-radius: 6px;
`;

export const StyledItemContent = styled.div`
  padding 10px 15px;
  border-left: 1px solid ${(props) => (props.type ? '#79b8ff' : '#959da5')};
  border-right: 1px solid ${(props) => (props.type ? '#79b8ff' : '#959da5')};
  border-bottom: 1px solid ${(props) => (props.type ? '#79b8ff' : '#959da5')};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const StyledHeaderRight = styled.div`
  & > * {
    margin-right: 10px;
  }

  & > *:nth-last-child() {
    margin-right: 0;
  }
`;

export const StyledHeaderLeft = styled.div`
  & > span:nth-of-type(1) {
    margin-right: 10px;
  }
`;
