import React, { useEffect, useRef, useState } from "react";

const FieldCustom = ({
  field: { onChange, onBlur, value, name },
  meta: { error, touched },
  title,
  type = "text",
  ...props
}) => {

  return (
    <label>
      {title}
      <div>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && error[name] && touched && (
          <p className={error ? "warning" : ""}>{error[name]}</p>
        )}
      </div>
    </label>
  );
};

// import React, { Component } from "react";

// class FieldCustom extends Component {
//   constructor({
//     field: { onChange, onBlur, value, name },
//     title,
//     type = "text",
//     ...props
//   }) {
//     super(props);

//     this.value = value;
//     this.name = name;
//     this.onChange = onChange;
//     this.onBlur = onBlur;
//     this.title = title;
//     this.isChanged = false;

//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.value !== this.value) this.isChanged = true;
//     else this.isChanged = false;
//   }

//   render() {
//     return (
//       this.isChanged ?
//       <label>
//         {this.title}
//         <input
//           name={this.name}
//           type={this.type}
//           value={this.value}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//         />
//       </label>
//     );
//   }
// }

export default FieldCustom;
