function newItem() {

    // adding new item to list: 
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }
  
    // to strike item on list:
      li.on("dblclick", function crossOut() {
      li.toggleClass("strike")
    });
  
    // adding delete button "X": 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
  
    crossOutButton.on("click", deleteListItem);
  
    function deleteListItem() {
      li.addClass("delete")
    }
    // re-order items: 
    $('#list').sortable();
  
  }