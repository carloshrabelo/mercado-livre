import { useRouter } from "next/router";
import Link from "next/link";

const Items = () => {
  const router = useRouter();
  const { search } = router.query;

  return (
    <>
      <h1>TODO: {search}</h1>
    </>
  );
};

export default Items;
