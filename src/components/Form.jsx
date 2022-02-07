import React from "react";

const Form = () => {
  let input = <input type="text" placeholder="Name" />;
  let button = <button type="submit">Submit</button>;
  let form = (
    <form>
      {input}
      {button}
    </form>
  );
  return form;
};

export default Form;
