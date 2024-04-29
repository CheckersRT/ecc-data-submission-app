import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // finds path of previous page
  const array = pathname.split("/");
  const currentPage = array[array.length - 1];
  let parentPath = array
    .filter((item) => {
      return item !== currentPage;
    })
    .join("/");

  if (parentPath === "") {
    parentPath = "/";
  }

  console.log("parentpath: ", parentPath);

  function handleClick() {
    router.push(parentPath);
  }
  return (
    <Button onClick={handleClick}>
      <Image alt="arrow icon" src="/backArrow.svg" width={18} height={15} />
    </Button>
  );
}

const Button = styled.button`
  height: 48px;
  align-self: start;
  appearance: none;
  text-decoration: none;
  padding: 15px;
  border: none;
  border-radius: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  background-color: #dcdcdc;
`;
