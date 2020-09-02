
export default React.memo(function FormField({ title, icon }){
  return(
    <div id="form-group">
      <div class="form-group">
        <label for="exampleFormControlInput1">{title}</label>
        <div class="d-flex align-items-center jsx-560990836 jsx-2177858300 input input--icon">
          <span class="material-icons">{icon}</span>  
          <input class="ml-2"type="Name" name="name" id="exampleFormControlInput1" required="" placeholder="Họ và tên" value="" style={{width: '100%', border: 'none', backgroundColor: '#F5F4F9'}} required />                       
        </div>  
      </div>
    </div>
  );
});