import React from 'react';
import Input from '@atoms/Input';
import Button from '@atoms/Button';
import Img from '@atoms/Img';
import Span from '@atoms/Span';
import TextArea from '@atoms/TextArea';

const Index = () => {
  return (
    <>
      <Button buttonType="GREEN">button</Button>
      <Button>button</Button>
      <Input placeholder="test" />
      <Img
        src="https://avatars2.githubusercontent.com/u/7006837?s=40&v=4"
        alt="~img"
      />
      <Img
        src="https://avatars2.githubusercontent.com/u/7006837?s=40&v=4"
        alt="~img"
        imgType="AVATAR_LARGE"
      />
      <Img
        src="https://avatars2.githubusercontent.com/u/7006837?s=40&v=4"
        alt="~img"
        imgType="AVATAR_SMALL"
      />
      <Span spanType="SMALL" hoverColor="blue" afterContent="after" color="red">
        small TEST color= red hover=blue
      </Span>
      <Span spanType="LARGE" hoverColor="red" afterContent="after2">
        large TEST default color = black, hover = red
      </Span>
      <Span hoverColor="red">default Test</Span>
      <TextArea
        name="test"
        placeholder="placeholder test"
        textAreaType="COMMENT"
      ></TextArea>
      <TextArea placeholder="write!!" textAreaType="ISSUE"></TextArea>
    </>
  );
};

export default Index;
