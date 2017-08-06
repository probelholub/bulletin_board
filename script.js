var tree = document.getElementsByClassName('menu_sidebar')[0];
var treeList = tree.getElementsByClassName('menu_list');
var treeListArray = [].slice.call(treeList);
tree.onclick = function(event) {
      var target = event.target;
      var checkOnOpen = target.classList.contains('open');//check class "open", flag 

      for (var i = 0; i < treeListArray.length; i++) {
        var childList = treeListArray[i].getElementsByTagName('ul')[0];
        childList.classList.remove('menu_drop_hidden');//delete all drop_menu
        treeListArray[i].classList.remove('open');//delete all opened after
        treeListArray[i].classList.add('close');
      }
      
      while (true) {
        if (target.classList.contains('menu_list')) {
          var childrenContainer = target.getElementsByTagName('ul')[0];
          if (!childrenContainer) return; // no children
          
          if(!checkOnOpen){
            childrenContainer.classList.add('menu_drop_hidden');
            target.classList.add("open");//open pseudo-after
          }
          else{
            childrenContainer.classList.remove('menu_drop_hidden');
            target.classList.remove("open");//open pseudo-after
            target.classList.add("close");
          }
          return;
        }
        target = target.parentNode;
      }
    }
      
     
    