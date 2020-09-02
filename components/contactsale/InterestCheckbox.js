
export default React.memo(function InterestCheckbox({ title, value }){
  return(
    <div class="form-check pt-3">
      <label>
        <input type="checkbox" class="form-check-input"  name="interested" value={value} />
        {title}
      </label>
    </div>
  );
});