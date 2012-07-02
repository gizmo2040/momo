
                
                
                    $(document).ready(init);                    
                    var cont_obj_face = {"lentes":0,"ojos":0,"nariz":0,"bocas":0,"cejas":0};
                    var cont_obj_body = {"pelo":0,"bup":0,"bdown":0,"shoes":0};
                    var selected = "";
                                        
                    
                    function init(e){
                          $("#btn_izq").click(btn_izq_cfun);
                          $("#btn_der").click(btn_der_cfun);
                          $("#lentes_btn").click(btn_lentes);
                          $("#ojo_btn").click(btn_ojo);
                          $("#ceja_btn").click(btn_ceja);
                          $("#boca_btn").click(btn_boca);
                          $("#nariz_btn").click(btn_nariz);
                          $("#pelo_btn").click(btn_pelo);
                          $("#bup_btn").click(btn_bup);
                          $("#bdown_btn").click(btn_bdown);
                          $("#shoes_btn").click(btn_shoes);
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
                    
                    function btn_lentes(e){
                        selected = "lentes";
                        console.log("lentes");
                        $("#imprimir").html(selected);
                    }
                    
                    function btn_ojo(e){
                        selected = "ojos";
                        console.log("ojos");
                        $("#imprimir").html(selected);
                    }                    
                    
                    function btn_ceja(e){
                        selected = "cejas";
                        console.log("cejas");
                        $("#imprimir").html(selected);
                    }
                                        
                    function btn_boca(e){
                        selected = "bocas";
                        console.log("bocas");
                        $("#imprimir").html(selected);
                    }
                                        
                    function btn_nariz(e){ 
                        selected = "nariz";
                        console.log("nariz");
                        $("#imprimir").html(selected);
                    }
                    function btn_pelo(e){
                        selected = "pelo";
                        console.log("pelo");
                        $("#imprimir").html(selected);
                     }
                    function btn_bup(e){
                        selected = "bup";
                        console.log("bup");
                        $("#imprimir").html(selected);
                     }
                     function btn_bdown(e){
                        selected = "bdown";
                        console.log("bdown");
                        $("#imprimir").html(selected);
                     }
                     function btn_shoes(e){
                        selected = "shoes";
                        console.log("shoes");
                        $("#imprimir").html(selected);
                     }
                    
                    function updateAvatar(cont_obj,pixels){
                        $("#"+selected).css("background", "url('img/"+selected + ".png') no-repeat -"+ (cont_obj[selected] * pixels) +"px 0px");
                    }               
                    
               
