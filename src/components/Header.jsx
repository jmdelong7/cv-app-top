import { useState } from 'react';
import editIcon from '../media/edit-icon.svg';
import InputField from './InputField';
import initData from '../data';

export default function Header() {
  const [edit, setEdit] = useState(false);
  const [headerInfo, setHeaderInfo] = useState(initData.header);

  function allowInput() {
    setEdit((prevEdit) => !edit);
  }

  function getInputs() {}

  const renderForm = () => {
    return (
      <form action={getInputs}>
        <InputField labelName="Name" htmlFor="Name" />
        <InputField labelName="Phone" htmlFor="Phone" />
        <InputField labelName="Email" htmlFor="Email" />
        <InputField labelName="Location" htmlFor="Location" />
      </form>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <h1>Jacob DeLong</h1>
        <span>Phone</span>
        <span>jacob@gmail.com</span>
        <span>Location</span>
      </>
    );
  };

  return (
    <header>
      {edit ? renderForm() : renderHeader()}
      <button onClick={allowInput}>
        <img src={editIcon} alt="edit" />
      </button>
    </header>
  );
}
