var lis = document.getElementsByTagName("li");
let len = lis.length;

for(var i= 0;i < len;i++){
    (function(i){
        lis[i].onclick = function() {        
            switch (i){
                case 0:
                    window.open("https://tools.geekershare.com/formathtml/");
                    break;
                case 1:
                    window.open("https://tools.geekershare.com/json/");
                    break;
                case 2:
                    window.open("https://tools.geekershare.com/random/");
                    break;
                case 3:
                    window.open("https://tools.geekershare.com/autoformat/");
                    break;
            }
        }  
    })(i)
}