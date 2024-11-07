function validate(){
    var name =document.getElementById("name").value;
    var name_redex = "/^[A-^Za-z]+$/";

    var age =document.getElementById("age").value;
    var age_redex = "/^[A-^Za-z]+$/"

    var city =document.getElementById("city").value;
    
    if(!(name.match(name_redex)) || (age.match(age_redex))){
        if(!(name.match(name_redex))){
            document.getElementById("name_error").value;
        }

        if(!(name.match(name_redex)) || (age.match(age_redex))){
            if(!(name.match(name_redex))){
                document.getElementById("name_error").value;
            }
        if(!(name.match(name_redex)) || (age.match(age_redex))){
            if(!(name.match(name_redex))){
                document.getElementById("name_error").value;
        }
    

    }
}
