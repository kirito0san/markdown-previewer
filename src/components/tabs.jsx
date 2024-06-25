const Tabs = ({ code, handleChange }) => {
  return (
    <div>
      {handleChange && <textarea onChange={handleChange} value={code} />}
      {!handleChange && <textarea defaultValue={code} />}
    </div>
  );
};

export default Tabs;
