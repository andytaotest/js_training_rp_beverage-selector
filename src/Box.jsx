/*Props: are data passed into a component*/

function Box(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: props.bgColor
      }}
    >
      {props.children}
    </div>
  );
}

export default Box;
