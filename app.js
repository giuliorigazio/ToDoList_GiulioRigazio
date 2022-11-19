var count 


$( document ).ready(function() {
    if(localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
            $("#lista").append(localStorage.getItem(localStorage.key(i)));
            count = localStorage.key(i);
            console.log(count);
          }
        count++
    }else{
        console.log('yey');
        count = 0;
    }
});

$('#submit').click('submit', function(e){
    e.preventDefault();
    addItem();
});
$( "#clearall" ).click(function() {
    $("#lista").html("");
    localStorage.clear();
    count = 0;
});

function addItem(){
    if($("#itemInput").val() == ""){
        alert("Non ti posso ricordare il nulla. Inserisci un valore valido! ")
    }else{
        var reminder = $("#itemInput").val();
        $("#lista").append('<div class="item my-3" id="' + count +'"> <h5 id="' + count +'" class="item-name text-capitalize"> ' + reminder + ' </h5><div class="item-icons"> <a href="#" class="complete-item mx-2 item-icon" onclick="completedItem('+ count +')"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit" onclick="editName('+ count +')"></i></a><a href="#" class="delete-item item-icon" onclick="deleteItem('+ count +')"><i class="far fa-times-circle"></i></a></div></div>');
        $("#itemInput").val("");  
        localStorage.setItem(count, '<div class="item my-3" id="' + count +'"> <h5 id="' + count +'" class="item-name text-capitalize"> '+ reminder + ' </h5><div class="item-icons"> <a href="#" class="complete-item mx-2 item-icon" onclick="completedItem('+ count +')"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit" onclick="editName('+ count +')"></i></a><a href="#" class="delete-item item-icon" onclick="deleteItem('+ count +')"><i class="far fa-times-circle"></i></a></div></div>');
        count++
    }
};

function deleteItem(index){
    $("#" + index).remove();
    localStorage.removeItem(index);
};

function completedItem(index){
    $("#" + index + ".item-name").toggleClass("completed");
    localStorage.setItem(index, $("#" + index).wrap('<span/>').parent().html());
};

function editName(index){
    var editValue = $("#" + index).text();
    $("#" + index).remove();
    localStorage.removeItem(index);
    $("#itemInput").val(editValue);
    count++;
};