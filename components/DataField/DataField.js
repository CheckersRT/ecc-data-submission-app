import styled from "styled-components";

export default function DataField({ field, data }) {
  return (
    <Container key={field.key}>
      <Label htmlFor={field.key}>{field.name}</Label>
      <Input
        type="text"
        id={field.key}
        defaultValue={data[field.key]}
        name={field.key}
      ></Input>
    </Container>
  );
}

const Container = styled.div`
position: relative;
`
const Label = styled.label`
position: absolute;
left: 5px;
top: -10px;
background-color: white;
font-size: 0.8rem;
font-weight: 200;
`

const Input = styled.input`

`
