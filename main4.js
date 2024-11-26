function search(){
    var input, ul, li, x, i,  txtValue, filter;
    input = document.getElementById('in1');
    filter = input.value.toUpperCase();
    ul = document.getElementById('list1');
    li = document.getElementById('li');
    for(i-0; 1<li.length;1++){
        x = li[i];
        txtValue = x,textContent;
        if(txtValue.toUpperCase().indexOf(filter) >-1){
            li[i].style.display = 'block';
        }
        else{
            li[i].style.display = 'none';
        }
    }
}