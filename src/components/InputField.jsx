export default function InputField({ labelName, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{labelName}</label>
      <input type="text" name={htmlFor} aria-label={`Edit ${labelName}`} />
    </div>
  );
}
