var Body = {
  setColor : function (color) {
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor : function (color) {
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Links = {
  setColor : function (color) {
    var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length){
      alist[i].style.color = color;
  i = i + 1;}
  }
}
function handler(self){
  var target= document.querySelector('body')
  if(self.value === 'DARK'){
    Body.setColor('hotpink');
    Body.setBackgroundColor('black')
    self.value='LIGHT';
    Links.setColor('hotpink');
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='DARK';
    Links.setColor('black');
  }
}
