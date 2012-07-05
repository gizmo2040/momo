var avatarHeigth = 323;
var avatarWidth = 110;

var configObj = {
  "base":{
    "file":'img/ninabase.png',
    "selected": 1,
    "max":1
  },
  "ojos":{
    "file": 'img/ojo.png',
    "selected": 1,
    "max":4
  },
  "cejas":{
                "file": 'img/ceja.png',
                "selected": 1,
                "max":4
    },
    "nariz":{
                "file": 'img/nariz.png',
    "selected": 1,
                "max":4
    },
    "bocas":{
                "file": 'img/boca.png',
    "selected": 1,
                "max":4
    },
    "pelo":{
                "file": 'img/pelo.png',
    "selected": 1,
                "max":4
    },
    "bup":{
                "file": 'img/bup.png',
    "selected": 1,
                "max":4
    },
    "shoes":{
                "file": 'img/shoes.png',
    "selected": 1,
                "max":4
    },

    "bdown":{
                "file": 'img/bdown.png',
    "selected": 1,
                "max":4
    }
}





                
                
                    $(document).ready(init);  

                    var cont_obj_face = {"lentes":0,"ojo":0,"nariz":0,"boca":0,"ceja":0};
                    var cont_obj_body = {"pelo":0,"bup":0,"bdown":0,"shoes":0};
                    var selected = "";  
                    
                    function init(e){
                          $("#btn_izq").click(btn_izq_cfun);
                          $("#btn_der").click(btn_der_cfun);
                          crearDivsAvatar();
                          crearBtns();
                          $(".btn_select").click(btn_select_click);
                    }
                    function crearBtns(){
                        for(key in configObj){
                              var tmpDiv = $("<div/>",{
                                    id: key +"_btn",
                                    class:"btn_select" 
                                    
                              });
                              tmpDiv.html(key);                            
                              tmpDiv.appendTo("#botones");
                              console.log("---->",key,configObj[key])                              
                        }
                    }
                    
                    function crearDivsAvatar(){
                        for(key in configObj){
                              var tmpDiv = $("<div/>",{
                                    id: "avatar_part_" + key
                                    
                              });
                              tmpDiv.css("position","absolute")
                              tmpDiv.css("width",avatarWidth);
                              tmpDiv.css("height",avatarHeigth);
                              configObj[key]["file"] && tmpDiv.css("background", "url('"+ configObj[key]["file"] + "') no-repeat 0px 0px");
                              tmpDiv.appendTo("#avatar_face_wrap");
                              console.log("---->",key,configObj[key])                              
                        }
                    }
                    
                    
                    function btn_izq_cfun(e){  
                        if(--configObj[selected].selected <= 0) configObj[selected].selected = configObj[selected].max -1;
                        updateAvatar();
                    }                
                    function btn_der_cfun(e){
                        if(++configObj[selected].selected > (configObj[selected].max -1)) configObj[selected].selected = 0;
                        updateAvatar();
                    }                    
                    
                    function btn_select_click(e){
                        selected = $(e.currentTarget).attr("id").split("_")[0];
                        $(".green_select").removeClass("green_select");
                        $(e.currentTarget).addClass("green_select");
                        $("#imprimir").html(selected);
                        console.log(selected);
                    }
                                        
                    function updateAvatar(cont_obj,pixels){
                        $("#avatar_part_"+selected).css("background", "url('"+ configObj[selected]["file"] + "') no-repeat -"+ (avatarWidth * configObj[selected]["selected"]) + "px 0px");
                    }               
                    
               
