import { useRouter } from "next/router";
import Link from "next/link";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>TODO: {id}</h1>
    </>
  );
};

export default Item;
