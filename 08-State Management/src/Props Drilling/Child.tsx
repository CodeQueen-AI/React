import GrandChild from "./GrandChild";

function Child({ user }: any) {
  return <GrandChild user={user} />;
}

export default Child;