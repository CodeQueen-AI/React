import Child from "./Child";

function Parent({ user }: any) {
  return <Child user={user} />;
}

export default Parent;