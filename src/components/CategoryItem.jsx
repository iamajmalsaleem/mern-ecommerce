import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3%;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  border: double;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
/* 
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
` */
const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 5px;
  right: 0;
  border: ridge;
  background-color: #dfcef2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const Title = styled.h1`
  color: black;
  /* color: white; */
  /* margin-bottom: 20px; */
  background-color: #dfcef2;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border: inset;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
