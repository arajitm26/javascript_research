// var base_url="https://app.totalaichat.com/"
var base_url=document.currentScript.dataset.server_url;
var role="debtor";
var ip;
var socket ={}
//var url='https://totalcollectr.io';
var url=document.currentScript.dataset.url;
var db=document.currentScript.dataset.db;

widget1();

async function widget1(){
    const widgetID=document.currentScript.id;
  
     async function getConfig(){
        
        if(document.currentScript.dataset.config){
            result= fetch(document.currentScript.dataset.config)

            .then(response => response.json())
                .then(data => {
              //  console.log('Success:', data);

                config=data;
            defer(config);
         
                })
                .catch((error) => {
                console.error('Error:', error);
                });
            
            
        }
       
    }
     await getConfig();
    var reload=0;
    function loadscript(){
    
       
         
         var script2 = document.createElement('script'); 
         document.getElementById("chatwidgettotalis").appendChild(script2);  
         script2.type = 'text/javascript';
         script2.src =  url+'/'+config.jqueryUIURL+'?t='+Math.random();

         var script3 = document.createElement('script'); 
         document.getElementById("chatwidgettotalis").appendChild(script3);  
         script3.type = 'text/javascript';
         script3.src =  url+'/'+config.socketURL+'?t='+Math.random();

         var script4 = document.createElement('script'); 
         document.getElementById("chatwidgettotalis").appendChild(script4);  
         script4.type = 'text/javascript';
         script4.src =  url+'/'+config.platformURL+'?t='+Math.random();

       

         
         var link1  =  document.createElement('link');
         link1.rel  = 'stylesheet';
         link1.type = 'text/css';
         link1.href =  url+'/'+config.jqueryUICss+'?t='+Math.random();
         link1.media = 'all';
         
         document.getElementById("chatwidgettotalis").appendChild(link1);


         var link2  = document.createElement('link');
         link2.rel  = 'stylesheet';
         link2.type = 'text/css';
         link2.href =  url+'/'+config.customCss+'?t='+Math.random();
         link2.media = 'all';
         document.getElementById("chatwidgettotalis").appendChild(link2);

         var link3  = document.createElement('link');
         link3.rel  = 'stylesheet';
         link3.type = 'text/css';
         link3.href =  url+'/'+config.materialdesigniconsCss+'?t='+Math.random();
         link3.media = 'all';
         document.getElementById("chatwidgettotalis").appendChild(link3);

         var sheet = document.createElement('style')
         sheet.innerHTML = ` #chat::-webkit-scrollbar {
             width: 6px;
             cursor: pointer;
             }
             #chat::-webkit-scrollbar-track {
             background-color: rgba(229, 231, 235, 1);
             cursor: pointer;
             }
             #chat::-webkit-scrollbar-thumb {
             cursor: pointer;
             background-color: #1F7A8C;
             }    
             /**************************/
             .chatbox_mainsec{
               opacity: none;
               visibility: none;
               display: none;
               transition: all 0.3s ease;
               -moz-transition: all 0.3s ease;
               -webkit-transition: all 0.3s ease;
             }
             .chatbox_mainsec--is-visible{
              opacity: none;
               visibility: none;
               display: block;
             }
      
             /* fb-whatsapp-2-way chat css */
            .chat-btn {
                position: absolute;
                right: 14px;
                bottom: 30px;
                cursor: pointer
            }
      
            .chat-btn .close {
                display: none
            }
      
            .chat-btn i {
                transition: all 0.9s ease
            }
      
            #check:checked~.chat-btn i {
                display: block;
                pointer-events: auto;
                transform: rotate(180deg)
            }
      
            #check:checked~.chat-btn .comment {
                display: none
            }
      
            .chat-btn i {
                font-size: 22px;
                color: #fff !important
            }
      
            .chat-btn {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                background: linear-gradient(to left,#022B3A,#1F7A8C);
                color: #fff;
                font-size: 22px;
                border: none
            }
      
            .wrapper {
                position: absolute;
                right: 20px;
                bottom: 100px;
                width: 300px;
                background-color: #fff;
                border-radius: 5px;
                opacity: 0;
                transition: all 0.4s
            }
      
            #check:checked~.wrapper {
                opacity: 1
            }
      
            .header {
                padding: 13px;
                background: linear-gradient(to left,#022B3A,#1F7A8C);
                border-radius: 5px 5px 0px 0px;
                margin-bottom: 10px;
                color: #fff
            }
      
            .chat-form {
                padding: 15px
            }
      
            .chat-form input,textarea,button {
                margin-bottom: 10px
            }
      
            .chat-form textarea {
                resize: none
            }
      
            .form-control:focus, .btn:focus {
                box-shadow: none
            }
      
            #check {
                display: none !important
            }`;
         document.getElementById("chatwidgettotalis").appendChild(sheet);


         var script5 = document.createElement('script'); 
         document.getElementById("chatwidgettotalis").appendChild(script5);  
         script5.type = 'text/javascript';
         script5.src =  url+'/'+config.sweetalert;
         script5.onload = defer;
    }
    function defer(config={}){
     
        if(window.jQuery && reload==1){
          
            init($);
            return ;
        }else{
          reload=1;
          if(!window.jQuery){
            var script = document.createElement('script'); 
            document.getElementById("chatwidgettotalis").appendChild(script);  
            script.type = 'text/javascript';
            script.src = url+'/'+config.jqueryURL;

           
               var script1 = document.createElement('script'); 
               document.getElementById("chatwidgettotalis").appendChild(script1);  
               script1.type = 'text/javascript';
               script1.src =  url+'/'+config.bootstrapURL;
               var link  = document.createElement('link');
               link.rel  = 'stylesheet';
               link.type = 'text/css';
               link.href =  url+'/'+config.bootstrapCss;
               link.media = 'all';
               document.getElementById("chatwidgettotalis").appendChild(link);
            
            loadscript();
          }else{
            var script = $('script[src*="bootstrap"]');
         //   console.log(script.length,"bootstrap")
             if (script.length == 0) {
               var script1 = document.createElement('script'); 
               document.getElementById("chatwidgettotalis").appendChild(script1);  
               script1.type = 'text/javascript';
               script1.src =  url+'/'+config.bootstrapURL;
               var link  = document.createElement('link');
               link.rel  = 'stylesheet';
               link.type = 'text/css';
               link.href =  url+'/'+config.bootstrapCss;
               link.media = 'all';
               document.getElementById("chatwidgettotalis").appendChild(link);
             }
            loadscript();
          }
         
            
                
          
         
        }
    }
   
    function init($){
       
        let html=`<div id="chatbxdv">
        <!-- default chat -->
        <div class="chatbox_sec">
               <div class="chatbox_innersec">
                 <button class="btn chat_commentBtn"><i class="mdi mdi-comment"></i></button>
                 <!-- Chatbox body Start -->
                 <div class="chatbox_mainsec" id="chat_draggable">
                   <!-- Chatbox Header Part Start -->
                   <nav class="chatbox_topheader d-flex justify-content-between align-items-center">
                     <div class="d-flex justify-content-center align-items-center">
                       <i class="mdi mdi-arrow-left font-normal icon_font"></i>
                       <span id="deb">
                         <span class="chatbox_live">Supports</span>
                       </span>
                     </div>
                   </nav>
                   <!-- Chatbox Header Part End -->
                   <!-- Chatbox Body Part Start -->
                   <div class="chatbox_wrap">
                     <div class="overflow-auto chat_draggableSelect" id="chat">
                       <div class="form_wrapper" id="form">
                         <div class="form_container">
                           <div class="title_container">
                             <h2>Live Chat Registration</h2>
                           </div>
                           <div class="row clearfix">
                             <div class="form_wrapper_outer">
                               <form id="frm" action="javascript:void(0);" onsubmit="doregistration();">
                                 <div class="input_field"> <span><i aria-hidden="true" class="mdi mdi-account"></i></span>
                                   <input type="text" id="name_chat"  placeholder="Your Name"  />
                                 </div>
                                 <div class="input_field"> <span><i aria-hidden="true" class="mdi mdi-account"></i></span>
                                   <input type="text" id="account_number_chat"  placeholder="Account Number"  />
                                 </div>
                                 <div class="input_field"> <span><i aria-hidden="true" class="mdi mdi-email"></i></span>
                                   <input type="email" id="email_chat" placeholder="Email"  />
                                 </div>
                                 <div class="input_field"> <span><i aria-hidden="true" class="mdi mdi-phone"></i></span>
                                   <input type="tel" id="phone_chat" placeholder="Phone Number"  />
                                 </div>
                                 <input class="button" type="submit" value="Chat Now" id="submit" />                                 
                               </form>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div class=" " id="chatmsg"> </div> 
                     </div>
                     <div  id="msg_typeing" style="color: #818181;font-weight: bold;text-align: left !important;margin-left: 10px;display:none;" >  </div>
                   </div>
                   <!-- Chatbox Body Part End -->
                   <!-- Chatbox Footer Part Start -->
                   <div class="justify-content-between align-items-center chatbox_footer" id="chatbox_footer">
                     <div class="position-relative d-flex" style="width:98%">
                       <i class="mdi mdi-emoticon-excited-outline chat_emoji"></i>
                       <input type="text" class="chat_msgbox" placeholder="Type a message..." id="message_chatwd" onfocusin='on_focusin()' onfocusout='on_focusout()'>
                       <!-- <i class="mdi mdi-paperclip chat_fileclip" id="file_icon" hidden="true"><input id="file-input" onchange="readURL(this);"  type="file"/></i> -->
                       <div class="chatbox_fileUpload" id="file_icon" hidden="false">                        
                         <label for="file-input">
                           <i class="mdi mdi-paperclip chat_fileclip"></i>
                         </label>                       
                         <input id="file-input" onchange="readURL(this);" type="file">
                       </div>
                     </div>
                     <!-- <div class="text-center align-items-center d-flex justify-content-center chat_microphone"><i class="mdi mdi-microphone "></i></div> -->
                     <div class="text-center align-items-center justify-content-center" id="msg" >
                       <button class="text-center align-items-center d-flex justify-content-center chat_sendBtn" id="msg_submit" style="position:absolute;right:8px;top:11px;"><i class="mdi mdi-send "></i></button>
                     </div>
                   </div>
                   <!-- Chatbox Footer Part End -->
                 </div>
                 <!-- Chatbox body End -->
               </div>
             </div>
   </div>

   <div class="modal fade" id="scrapModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true" style="width:100%">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&#215;</span>
        </button>
      </div>
      <div class="modal-body">
       <img id="modal_img"src="" style="width:100%"/>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" type="button" data-dismiss="modal">close</button>
      
      </div>
    </div>
  </div>
</div>`;
   $("#chatwidgettotalis").append(html);

        const btn = document.querySelector(".chat_commentBtn");
        const chatBox = document.querySelector(".chatbox_mainsec");
        btn.addEventListener("click", () => {
            chatBox.classList.toggle("chatbox_mainsec--is-visible");
            if (chatBox.classList.contains("chatbox_mainsec--is-visible")) {
                btn.innerHTML = '<i class="mdi mdi-close"></i>';
            } else {
                btn.innerHTML = '<i class="mdi mdi-comment"></i>';
            }
        });
     // Draggable Function for Chatbox
            $(function () {
               
                var draggableDiv = $('#chat_draggable').draggable();
              
                $('.chat_draggableSelect', draggableDiv).mousedown(function(ev) {
                   
                    draggableDiv.draggable('disable');
                    draggableDiv.css({"cursor": "text"});
                }).mouseup(function(ev) {
                  
                    draggableDiv.draggable('enable');
                    draggableDiv.css({"cursor": "move"});
                });
            });
            ///////////////////////
            const datecal = (date) => {
                difference=new Date() - new Date(date)
                   let secondsInMiliseconds = 1000,
                     minutesInMiliseconds = 60 * secondsInMiliseconds,
                     hoursInMiliseconds = 60 * minutesInMiliseconds,
                     daysInMiliseconds = 24 * hoursInMiliseconds,
                     weeksInMiliseconds = 7 * daysInMiliseconds,
                     monthsInMiliseconds = 30 * daysInMiliseconds,
                     yearsInMiliseconds = 52 * weeksInMiliseconds;
              
                   var differenceInYears = difference / yearsInMiliseconds,
                     differenceInMonths = difference / monthsInMiliseconds,
                     differenceInWeeks = difference / weeksInMiliseconds,
                     differenceInDays = difference / daysInMiliseconds,
                     differenceInHours = difference / hoursInMiliseconds,
                     differenceInMinutes = differenceInHours % 1 * 60,
                     differenceInSeconds = differenceInMinutes % 1 * 60;
                   var timedifference = '';
                   var set = 0;
                   if (Math.floor(differenceInDays) > 0) {
                     set = -1;
                     if (Math.floor(differenceInDays) == 1) {
                       timedifference = ' Yesterday';
                     } else if (Math.floor(differenceInDays) > 1) {
                       var nd = new Date();
                       var last = new Date(nd.getTime() - (differenceInDays * 24 * 60 * 60 * 1000));
                       var day = last.getDate();
                       var month = last.getMonth() + 1;
                       var year = last.getFullYear();
                       timedifference = month+'/'+day+'/'+year;
                     }
              
                   } else  {
                    
                            var hours = date.getHours();
                        var minutes = date.getMinutes();
                        var ampm = hours >= 12 ? 'PM' : 'AM';
                        hours = hours % 12;
                        hours = hours ? hours : 12; // the hour '0' should be '12'
                        minutes = minutes < 10 ? '0'+minutes : minutes;
                        var strTime = hours + ':' + minutes + ' ' + ampm;
                        timedifference= strTime;
                   }
                  
                   return timedifference;
                 }
                
                  //  var base_url="http://localhost:4000/";;
                
           socket = io(base_url, {query: 'db='+db});
          // socket = io(base_url);
          var counter=0;
          var notification_sound=url+"/plugins/chat//audio/notification.mp3";
         var audioObj = new Audio(notification_sound);
         $( document ).ready(function() {
            $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
                // Convert key-value pairs to JSON
                // https://stackoverflow.com/a/39284735/452587
                data = data.trim().split('\n').reduce(function(obj, pair) {
                  pair = pair.split('=');
                  return obj[pair[0]] = pair[1], obj;
                }, {});
                ip=data.ip;
              
              });

              var chatuserid=localStorage.getItem("chatuserid");
              var thread_id=localStorage.getItem("thread_id");
              if(chatuserid!=null && chatuserid!=''){
                $.ajax({
                    type: 'post',
                    url: url+"/users/getChatDetails",
                    data: "thread_id="+thread_id+"&chatuserid="+chatuserid,
                    // async : false,
                    success: function(data)
                      {
                        data=JSON.parse(data);
                        data1=data.data.data;

                        data1.forEach(function(item, index){
                          $("#file_icon").prop("hidden",false);
                          
                          var timezone=Intl.DateTimeFormat().resolvedOptions().timeZone;
                              item.created_date=convertTZ(item.created_date, timezone) ;
                          if(item.from_id==chatuserid){
                            localStorage.setItem("not_first_msg",1)
                            if($.trim(item.file_type)!=''){
    
                              if(item.file_type=='image/png'||item.file_type=='image/jpg'||item.file_type=='image/jpeg'||item.file_type=='image/gif'){
                                var name=localStorage.getItem("name_chat");
                              //  console.log(item.message,"aaa")
                         $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                            <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2"><a  href="#scrapModal" data-toggle="modal" data-table="${url}/${item.message}" ><img width="100%;"; src="${url}/${item.message}"/></a></span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                            <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                         </div>`);
                              }else{
                                var name=localStorage.getItem("name_chat")
                         $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                            <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2"><a download href="${url}/${item.message}"> FILE</a></span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                            <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                         </div>`);
                              }
                            
                            }else{
                              var name=localStorage.getItem("name_chat")
                         $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                            <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2">${item.message}</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                            <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                         </div>`);
                            }
                           
                          
                          }else{
                            from_ids=(item.from_id).split("_");
                           
                            if(from_ids.length==2){
                              if( parseInt(from_ids[1])==parseInt(chatuserid)){
                                localStorage.setItem("not_first_msg",1)
                                var name=localStorage.getItem("name_chat");
    
    
                                if($.trim(item.file_type)!=''){
     
                                    if(item.file_type=='image/png'||item.file_type=='image/jpg'||item.file_type=='image/jpeg'||item.file_type=='image/gif'){
                                      var name=localStorage.getItem("name_chat")
                                      $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                                                            <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2"><a  href="#scrapModal" data-toggle="modal" data-table="${url}/${item.message}" ><img width="100%;"; src="${url}/${item.message}"/></a></span> <span class="chatmsg_time pl-1">${datecal( new Date(item.created_date))}</span></span>
                                                            <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                                                        </div>`);
                                    }else{
                                      var name=localStorage.getItem("name_chat")
                                      $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                                                            <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2"><a download href="${url}/${item.message}"> FILE</a></span> <span class="chatmsg_time pl-1">${datecal( new Date(item.created_date))}</span></span>
                                                            <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                                                        </div>`);
                                    }
    
                                    }else{
                                    var name=localStorage.getItem("name_chat")
                                    $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                                                            <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2">${item.message}</span> <span class="chatmsg_time pl-1">${datecal( new Date(item.created_date))}</span></span>
                                                            <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                                                        </div>`);
                                    }
                            
                            }else{
                              var image=url+'/'+item.cImage+'';
                             
                              if($.trim(item.file_type)!=''){
                                if(item.file_type=='image/png'||item.file_type=='image/jpg'||item.file_type=='image/jpeg'||item.file_type=='image/gif'){
                                  $("#chatmsg").append(`<div class="d-flex  chat_loginuser">
                      <img src="${url}/public/${item.cImage}" class="rounded-circle chating_userimg" />
                            <span class="align-items-start d-flex  chat_collectuser_box flex-wrap"><span class="chat_msgname text-left">${item.from_name}</span> <span class="text-left mb-2"><a  href="#scrapModal" data-toggle="modal" data-table="${url}/${item.message}" ><img width="100%;"; src="${url}/${item.message}"/></a></span> <span class="chatmsg_time pl-1">${datecal( new Date(item.created_date))}</span></span>
                           
                         </div>`);
                                }else{
                                  $("#chatmsg").append(`<div class="d-flex  chat_loginuser">
                      <img src="${url}/public/${item.cImage}" class="rounded-circle chating_userimg" />
                            <span class="align-items-start d-flex  chat_collectuser_box flex-wrap"><span class="chat_msgname text-left">${item.from_name}</span> <span class="text-left mb-2"><a download href="${url}/${item.message}"> FILE</a></span> <span class="chatmsg_time pl-1">${datecal( new Date(item.created_date))}</span></span>
                           
                         </div>`);
                                }
                              }else{
                                $("#chatmsg").append(`<div class="d-flex  chat_loginuser">
                                <img src="${url}/public/${item.cImage}" class="rounded-circle chating_userimg" />
                                      <span class="align-items-start d-flex  chat_collectuser_box flex-wrap"><span class="chat_msgname text-left">${item.from_name}</span> <span class="text-left mb-2">${item.message}</span> <span class="chatmsg_time pl-1">${datecal( new Date(item.created_date))}</span></span>
                                     
                                   </div>`);
                               
                              
                              }
    
                            
                            }
                            }
                           
    
                          }
                          setTimeout(
                            function() 
                            {
                              $('#chat').scrollTop($('#chat')[0].scrollHeight);
                            }, 1500);
                        
                        });
                        var debtor_details=data.data.debtor_details;
                       // console.log(debtor_details)
                        if(parseInt(debtor_details.is_closed)==1){
                          $("#chatbox_footer").hide();
                          $("#form").show();
                           $("#msg").hide();
                           $("#chatmsg").hide();
                          
                        }else{
                          $("#chatbox_footer").show();
                          $("#form").hide();
                           $("#msg").show();
                           $("#chatmsg").show();
                           socket.emit('join_debtor', chatuserid,thread_id,db);
                        }
                       
                      }
                });
            
              }else{
                $("#chatbox_footer").hide();
                $("#form").show();
                $("#msg").hide();
               }
         });

         $("#message_chatwd").keyup(function(event) {
         
            if (event.keyCode === 13) {
             
                $("#msg_submit").click();
            }
        });
           $("#msg_submit").click(function(event){
           
              var message=$("#message_chatwd").val();
              if($.trim(message)!=''){
               
                var name=localStorage.getItem("name_chat")
               var not_first_msg= localStorage.getItem("not_first_msg");
               localStorage.setItem("not_first_msg",1)
                    $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                          <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2">${message}</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                          <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                       </div>`);
                    counter++;
                    var name=localStorage.getItem("name_chat");
                   
                    if(not_first_msg=='NULL' || not_first_msg=='NaN'|| not_first_msg=='' || not_first_msg=='null' || (isNaN(parseInt(not_first_msg)))){
                      audioObj.play();
                      $("#file_icon").prop("hidden",false);
                      $("#chatmsg").append(`<div class="d-flex chat_loginuser">
                          
                          <span class="d-flex chat_loginuser_box align-items-start flex-wrap"> <span>We are assigning an agent for you.Please wait... .</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                       </div>`);
                     /*  $("#chat").append(`<div class="d-flex  chat_loginuser">
                    <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                          <span class="align-items-start d-flex  chat_collectuser_box flex-wrap"><span class="chat_msgname text-left">Maria Steve</span> <span class="text-left mb-2">${message}</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                         
                       </div>`);*/
                    }
                   
                    $('#chat').scrollTop($('#chat')[0].scrollHeight);
                $("#message_chatwd").val("");
                
                socket.emit('msg_to_collector', localStorage.getItem("chatuserid"), localStorage.getItem("thread_id"),message,ip,platform.name,platform.os.family+platform.os.architecture,db);
                on_focusout();
              }
             
              
           });
  
           
           socket.on('msg_to_accept_debtors_response',(name,image,message,collector_id,thread_id,from_id) => {
            audioObj.play();
            $("#chatmsg").append(`<div class="d-flex  chat_loginuser">
                    <img src="${url}/public/${image}" class="rounded-circle chating_userimg" />
                          <span class="align-items-start d-flex  chat_collectuser_box flex-wrap"><span class="chat_msgname text-left">${name}</span> <span class="text-left mb-2">${message}</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                         
                       </div>`);
                       $('#chat').scrollTop($('#chat')[0].scrollHeight);
             //console.log(name,image,message,collector_id,thread_id,from_id)
           });
  
  
           socket.on('msg_to_accept_debtors_file_response',(name,image,message,collector_id,thread_id,from_id,file_type) => {
  
             //console.log(file_type)
            if($.trim(file_type)!=''){
                          if(file_type=='image/png'||file_type=='image/jpg'||file_type=='image/jpeg'||file_type=='image/gif'){
                              message=`<a  href="#scrapModal" data-toggle="modal" data-table="${url}/${message}" ><img width="100%;"; src="${url}/${message}"/></a>`;
                              }else{
                                  message=`<a download href="${url}/${message}"> FILE</a>`;
                              }
                      }
            audioObj.play();
            $("#chatmsg").append(`<div class="d-flex  chat_loginuser">
                    <img src="${url}/public/${image}" class="rounded-circle chating_userimg" />
                          <span class="align-items-start d-flex  chat_collectuser_box flex-wrap"><span class="chat_msgname text-left">${name}</span> <span class="text-left mb-2">${message}</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                         
                       </div>`);
                       $('#chat').scrollTop($('#chat')[0].scrollHeight);
             //console.log(name,image,message,collector_id,thread_id,from_id)
           });
           socket.on('typing_col_response',(thread_id,name,status) => {
           //  console.log("typing_col_response")
            var html=name+' is typing....';
            $("#msg_typeing").hide();
            if(parseInt(status)==1){
              $("#msg_typeing").html(html);
               $("#msg_typeing").show();
              
            }
           //console.log(thread_id,name,status);
          
          });
           socket.on('chat_accept_response',(collector_id,debtor_id,thread_id,fullname,message,date,updated_date,file_type) => {
           //console.log(collector_id,debtor_id);
            $("#file_icon").prop("hidden",false);
          });
  
          socket.on('chat_closed_response',(collector_id,debtor_id,thread_id,fullname,message,date,updated_date,is_online) => {
         
              localStorage.setItem("chatuserid",'');
              localStorage.setItem("thread_id",'');
              localStorage.setItem("not_first_msg",'');
              
              $("#chatbox_footer").hide();
              $("#form").show();
              $("#msg").hide();
              $("#chatmsg").hide();
              
              $("#file_icon").prop("hidden",true);
          });
           socket.on('registered', function(caht_user_id,thread_id) {
             $("#chatbox_footer").show();
             localStorage.setItem("chatuserid",caht_user_id);
             localStorage.setItem("thread_id",thread_id);
             $("#form").hide();
             $("#chatmsg").html("")
             $("#chatmsg").show();
              $("#msg").show();

             // $("#file_icon").prop("hidden",false);
              });

           $('#scrapModal').on('show.bs.modal', function (e) {
              var table = $(e.relatedTarget).data('table')
             
              $('#modal_img').attr('src', table)
             //console.log(table)
            })
            //////////////////
          
    }
  
   
}
function sendbtn() {
    let printtext = document.getElementById('chatmsg');
    let copytext = document.getElementById('typemsg');
    let currentdate = new Date();
    let copiedtext = copytext.value;
    let printnow = '<div class="d-flex chat_loginuser">' + '<img src="${url}/plugins/chat/assets/img/login-user.jpg" class="rounded-circle chating_userimg">' + '<span class="d-flex chat_loginuser_box align-items-end">' + copiedtext + '<span class="chatmsg_time pl-1">' + currentdate.getHours() + ':' + currentdate.getMinutes() + '</span>' + '</span>' + '</div>';
    printtext.insertAdjacentHTML('beforeend', printnow);
    let box = document.getElementById('journal-scroll');
    box.scrollTop = box.scrollHeight;
}
function doregistration(){
 // alert("test")
    var name_chat=$("#name_chat").val();
           var account_number_chat=$("#account_number_chat").val();
           var email_chat=$("#email_chat").val();
           var phone_chat=$("#phone_chat").val();
           var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
 
           if($.trim(name_chat)==''){
            swal("Please Enter Name", "", "error");
            $("#name_chat").focus();
           }else{
            //console.log(name_chat,"name_chat")
           localStorage.setItem("name_chat",name_chat)
         //  console.log(name_chat,"name_chat1")
        // alert(db)
            socket.emit('register_user_id', account_number_chat,role,name_chat,email_chat,phone_chat,ip,platform.name,platform.os.family+platform.os.architecture,db);
            
           }

        
         
   
   }

   function on_focusin()
   {
     var thread_id=localStorage.getItem("thread_id");
     var name_chat=localStorage.getItem("name_chat");
    //console.log(thread_id)
     socket.emit('typing', parseInt(thread_id),name_chat,1);
   //console.log("start typing");
   
   }

   function on_focusout()
   {
    var thread_id=localStorage.getItem("thread_id");
     var name_chat=localStorage.getItem("name_chat");
     socket.emit('typing', parseInt(thread_id),name_chat,0);
   //console.log("stop typing");
    
     
   } 
   function get_time()
  {
   var time = new Date();
   return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
  }  
  
  function readURL(input){
          
          if (input.files && input.files[0]) {
           
            /////////////////////
            var fd = new FormData();
                var files = input.files;
                
                // Check file selected or not
                if(files.length > 0 ){
                  fd.append('file',files[0]);
                  $("#file-input").val("")
                  $.ajax({
                      url: url+'/users/chatfileupload',
                      type: 'post',
                      data: fd,
                      contentType: false,
                      processData: false,
                      success: function(response){
                        response=JSON.parse(response);
                      
                        if(parseInt(response.status)==1){
                          var not_first_msg=localStorage.getItem("not_first_msg")
                          if(not_first_msg=='NULL' || not_first_msg=='NaN'|| not_first_msg==''){
                            audioObj.play();

                            $("#chatmsg").append(`<div class="d-flex chat_loginuser">
                                
                                <span class="d-flex chat_loginuser_box align-items-start flex-wrap"> <span>We are assigning an agent for you.Please wait... .</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                            </div>`);
                        
                          }
                          localStorage.setItem("not_first_msg",1)
                          var name=localStorage.getItem("name_chat")
                          socket.emit('debtor_fileupload',response.file,localStorage.getItem("thread_id"),localStorage.getItem("chatuserid"),response.file_type,ip,platform.name,platform.os.family+platform.os.architecture,db);

                          if(response.file_type=='image/png'||response.file_type=='image/jpg'||response.file_type=='image/jpeg'||response.file_type=='image/gif'){
                            
                           
                          $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                                <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2"><a  href="#scrapModal" data-toggle="modal" data-table="${url}/${response.file}" ><img width="100%;"; src="${url}/${response.file}"/></a></span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                                <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                            </div>`);
                          }else{
                            $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                                <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">${name}</span> <span class="text-right mb-2"><a download href="${url}/${response.file}"> FILE</a></span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                                <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                            </div>`);
                          }

                          
                          $('#chat').scrollTop($('#chat')[0].scrollHeight);
                        }else{
                          swal(response.message, "", "error");
                        }
                        
                      },
                  });
                }else{
                  swal("Please select a file.", "", "error");
                  
                }


            ///////////////
            
                      }         

}

function downloadFile(filename,output){
if($.trim(output)!=''){
var a = document.createElement('a');
a.href = filename;
a.download = output;
document.getElementById("chatwidgettotalis").appendChild(a);
a.click();
document.getElementById("chatwidgettotalis").removeChild(a)
}

}
function convertTZ(date, tzString) {
  var d=new Date(date);
  
  date1=new Date(Date.UTC(d.getFullYear(), ((d.getMonth() )), d.getDate(), d.getHours(), d.getMinutes(),d.getSeconds()))

    return new Date((typeof date1 === "string" ? new Date(date1) : date1).toLocaleString("en-US", {timeZone: tzString}));   
}