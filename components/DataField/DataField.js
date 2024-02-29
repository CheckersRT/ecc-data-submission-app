import styled from "styled-components";

export default function DataField({ field, data }) {
  return (
    <Container key={field.key}>
      <Label htmlFor={field.key}>{field.name}</Label>
      <Input
        type={field.type}
        id={field.key}
        defaultValue={data[field.key]}
        name={field.key}
        required={field.required}
      ></Input>
    </Container>
  );
}

const Container = styled.div`
position: relative;
// border: 1px solid gray;
// border-radius: 5px;
box-sizing: border-box;
`
const Label = styled.label`
position: absolute;
left: 1rem;
top: -10px;
background-color: white;
font-size: 0.8rem;
font-weight: 200;
padding: 2px;
`

const Input = styled.input.attrs(props => ({type: "text"}))`
box-sizing: border-box;
width: 100%;
appearance: none;
// border: none;
padding: 1.1rem;
border: 1px solid #79747E;
border-radius: 5px;

font-size: 1rem;
font-weight: 300;
letter-spacing: 1px;
`
