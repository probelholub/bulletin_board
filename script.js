/*create open-close drop_menu*/
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
          return;
        }
        target = target.parentNode;
      }
    }
/*create open-close drop_menu*/

/*create drop-menu search*/
var search_drop = document.getElementsByClassName('searchbox')[0];
var search_textbox = document.getElementsByClassName('textbox')[0];

search_drop.onfocus = function(event) {
  if(search_drop.value == 'Поиск...'){
    search_drop.value = '';
  }
}

search_drop.onchange = function(event) {
  if(search_textbox.lastElementChild.classList.contains('search_drop_menu')){
    search_textbox.lastElementChild.remove();
  }
}

search_drop.oninput = function(event){
  
  var search_list = ['доставка пиццы','теннисный клуб','доска','дос','дос','дос','дос','дос','дос']
  var list_after = [];
  var check_on_drop = search_textbox.lastElementChild.classList.contains('search_drop_menu');
  
  function create_menu(list_after) {//создание вложенного списка
    var search_drop_menu = document.createElement('div');
    var ul_search = document.createElement('ul');
    for (var i = 0; i < list_after.length; i++) {
      var li_search = document.createElement('li');
      li_search.innerHTML = list_after[i];
      ul_search.appendChild(li_search);
    }
    search_drop_menu.appendChild(ul_search);
    search_drop_menu.className = 'search_drop_menu';
    return search_drop_menu;
  }


  if(search_drop.value.length > 2){
    for (var i = 0; i < search_list.length; i++) {
      if( ~search_list[i].indexOf(search_drop.value.toLowerCase()) ){
        list_after.push(search_list[i]);
      }
    }

    if(list_after.length != 0){
      if( !check_on_drop ){// проверка, было ли уже добавлено меню в search_textbox
        var search_drop_menu = create_menu(list_after);
        search_textbox.appendChild(search_drop_menu);//добавление нового
      }
      else{
        var search_drop_menu = create_menu(list_after);
        search_textbox.replaceChild(search_drop_menu, search_textbox.lastElementChild);//замена старого
      }
    }
    else{
      if(check_on_drop){
        search_textbox.lastElementChild.remove();//удаление меню при несовпадении строк
      }
    }
  }
  else{
    if(check_on_drop){
      search_textbox.lastElementChild.remove();//удаление меню при длине < 2
    }
  }
  
}
/*create drop-menu search*/     
    