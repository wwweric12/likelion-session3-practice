import Hobby from "./Hobby";

export default function HobbyList(props) {
  const { hobby } = props.data;
  return (
    <>
      <h3>HOBBY</h3>
      <div className="wrapHobby">
        {hobby.map((data, index) => (
          <Hobby data={data} key={index} isDark={props.dark} />
        ))}
      </div>
    </>
  );
}
