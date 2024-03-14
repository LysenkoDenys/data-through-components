const Child02 = (props) => {
  return (
    <div>
      <p>
        <i>Child Component</i>
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={props.changeNameHandler}
        />
      </form>
    </div>
  );
};

export default Child02;
