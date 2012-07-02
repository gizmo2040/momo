
                
                
                    $(document).ready(init);  

                    var cont_obj_face = {"lentes":0,"ojo":0,"nariz":0,"boca":0,"ceja":0};
                    var cont_obj_body = {"pelo":0,"bup":0,"bdown":0,"shoes":0};
                    var selected = "";
                                        
                    
                    function init(e){
                          $("#btn_izq").click(btn_izq_cfun);
                          $("#btn_der").click(btn_der_cfun);
                          $(".btn_select").click(btn_select_click);
                    }
                    
                    function btn_izq_cfun(e){  
                                          
                        if(cont_obj_face.hasOwnProperty(selected)){
                          var pixels = 50;    
                          var cont_obj = cont_obj_face; 
                        }else{
                          var pixels = 100;    
                          var cont_obj = cont_obj_body;                             
                        }
                        
                        if(cont_obj[selected]>=0){
                        --cont_obj[selected];
                        console.log("izquierda");
                        updateAvatar(cont_obj,pixels);
                        }
                    }                
                    function btn_der_cfun(e){
                        if(cont_obj_face.hasOwnProperty(selected)){
                          var pixels = 50;    
                          var cont_obj = cont_obj_face; 
                        }else{
                          var pixels = 100;    
                          var cont_obj = cont_obj_body;                             
                        }
                        if(cont_obj[selected] <3){
                        ++cont_obj[selected];
                        console.log("derecha")
                        updateAvatar(cont_obj,pixels);
                        }
                    }                    
                    
                    function btn_select_click(e){
                        selected = $(e.currentTarget).attr("id").split("_")[0];
                        $("#imprimir").html(selected);
                    }
                                        
                    function updateAvatar(cont_obj,pixels){
                        $("#"+selected).css("background", "url('img/"+selected + ".png') no-repeat -"+ (cont_obj[selected] * pixels) +"px 0px");
                    }               
                    
               
