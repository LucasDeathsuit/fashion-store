import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import Rating from './Rating';

const Comment = styled.div`
background-color: #fff;
border: solid 10px ${props => props.borderColor || 'pink'};
display: flex;
flex-direction: column;
align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 25px;
`

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transform: translateY(-65%);
  gap: 8px;
`

const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 100%;
`

const Username = styled.h2`
  color: #8d8d8d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-weight: 400;
`

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Title = styled.h3`
  color: #8d8d8d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  `

const Paragraph = styled.p`
  color: #8d8d8d;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  text-align: center;
`

export default function CommentSection({borderColor, name, value, title, comment }) {
  return (
    <Comment borderColor={borderColor}>
      <Content>
        <UserSection>
          <Avatar src='images/sapatos.jpg' />
          <Username>{name}</Username>
        </UserSection>
        <Rating value={value} />
        <CommentArea>
          <Title>{title}</Title>
          <Paragraph>{comment}</Paragraph>
        </CommentArea>
      </Content >
    </Comment>
  )
}
