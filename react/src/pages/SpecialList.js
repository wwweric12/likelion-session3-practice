import Special from "./Special";

export default function SpecialList(props) {
  const { special } = props.data;

  return (
    <>
      <h3>특이점</h3>
      {special.map((data, index) => (
        <div className="wrapSpecial">
          <Special data={data} key={index} isDark={props.dark} />
        </div>
      ))}
    </>
  );
}
