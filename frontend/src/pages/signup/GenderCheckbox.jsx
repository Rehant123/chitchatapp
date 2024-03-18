const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => (
  <div className="flex">
    <div className="form-control">
      <label className="label gap-2 cursor-pointer">
        <span className="label-text">Male</span>
        <input
          type="checkbox"
          className="checkbox border-slate-980"
          checked={selectedGender === "Male"}
          onChange={() => {
            onCheckboxChange("Male");
          }}
        />
      </label>
    </div>
    <div className="form-control">
      <label className="label gap-2 cursor-pointer">
        <span className="label-text">Female</span>
        <input
          type="checkbox"
          checked={selectedGender == "Female"}
          className="checkbox border-slate-980"
          onChange={() => {
            onCheckboxChange("Female");
          }}
        />
      </label>
    </div>
  </div>
);

export default GenderCheckbox;
