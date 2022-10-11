function validate() {    
    var fname = document.reg_form.fname.value;
    nae.innerHTML = fname;    
    var pass = document.reg_form.pass.value;   
    ble.innerHTML = pass;
    var pas = document.reg_form.pas.value;   
    blee.innerHTML = pas; 
    var address = document.reg_form.address.value; 
    lop.innerHTML = address;   
    var gender = document.reg_form.gender.value; 
    apo.innerHTML = gender;   
    var age = document.reg_form.age.value;  
    kop.innerHTML = age;      

    if (fname.length <= 0) {    
        alert("Name is required");    
        return false;    
    }    
    if (pass != pas) {    
        alert("Password not match");    
        return false;   
    }    
    if (address.length <= 0) {    
        alert("Address is required");    
        return false;    
    }    
    if (gender.length <= 0) {    
        alert("Gender is required");       
        return false;   
    }    
    if (age.length <= 0) {    
        alert("Mobile number is required");      
        return false;    
    }    
    return false;    
}   