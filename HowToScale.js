function handleFormSubmit(event){

    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;;
    const phone = event.target.phone.value;;
  
    const user = {
      username,
      email,
      phone
    };
  
    localStorage.setItem(user.email,JSON.stringify(user));
    showUserOnScreen(user);
}
  
  function showUserOnScreen(user){
    const userList = document.getElementById("userList");
   userList.innerHTML = userList.innerHTML + `<li>${user.username}-${user.email}-${user.phone}</p>` 
}