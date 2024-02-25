import Link from "next/link";

export default function submitSuccess({ params }) {
  return (
    <>
      <p>SUCCESS!</p>
      <Link href="/selectType">Submit more data</Link>
    </>
  );
}
