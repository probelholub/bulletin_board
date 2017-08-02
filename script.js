var tree = document.getElementsByClassName("menu_sidebar")[0];
var treeList = tree.getElementsByClassName('menu_list');
var treeListArray = [].slice.call(treeList);
//alert(treeListArray);
tree.onclick = function(event) {
  var target = event.target;
  
  for (var i = 0; i < treeListArray.length; i++) {
    var childList = treeListArray[i].getElementsByTagName('ul')[0];
    childList.classList.remove('menu_drop_hidden');
  }
  
  while (true) {
    if (target.classList.contains('menu_list')) {
     //alert('we are inside');
      var childrenContainer = target.getElementsByTagName('ul')[0];
      if (!childrenContainer) return; // no children
      
      childrenContainer.classList.add('menu_drop_hidden');
      return;
    }
    target = target.parentNode;
  }
}
      
     
    
      
     
