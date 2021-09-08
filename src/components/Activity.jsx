// const Activity = () => {
//   return <div>Hello from activity component.</div>;
// };

// export default Activity;

const Activity = (props) => {
  const { kind } = props;
  return <div>{kind}: Hello from activity component.</div>;
};

export default Activity;
