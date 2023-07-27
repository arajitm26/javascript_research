// var base_url="https://app.totalaichat.com/"
var base_url = document.currentScript.dataset.server_url;
var role = "debtor";
var ip;
var socket = {}
//var url='https://totalcollectr.io';
var url = document.currentScript.dataset.url;
var db = document.currentScript.dataset.db;
var notification_sound = url + "/plugins/chat/audio/notification.mp3";
var audioObj = new Audio(notification_sound);
const widgetID = document.currentScript.id;


//fetching config file
if (document.currentScript.dataset.config) {
    result = fetch(document.currentScript.dataset.config)

        .then(response => response.json())
        .then(data => {
            //  console.log('Success:', data);

            config = data;
            // defer(config);
            loadscript(config);

        })
        .catch((error) => {
            console.error('Error:', error);
        });


}


//loading all css and javascript files
function loadscript(config) {

  //  console.log(config.jqueryUIURL);

    // var script2 = document.createElement('script'); 
    // document.getElementById("chatwidgettotalis").appendChild(script2);  
    // script2.type = 'text/javascript';
    // script2.src =  url+'/'+config.jqueryUIURL+'?t='+Math.random();

    // var script1 = document.createElement('script'); 
    // document.getElementById("chatwidgettotalis").appendChild(script1);  
    // script1.type = 'text/javascript';
    // script1.src =  url+'/'+config.customURL+'?t='+Math.random();
    if(!window.jQuery){
    var script2 = document.createElement('script');
    document.getElementById("chatwidgettotalis").appendChild(script2);
    script2.type = 'text/javascript';
    script2.src = url + '/' + config.jqueryURL + '?t=' + Math.random();

    var script3 = document.createElement('script');
    document.getElementById("chatwidgettotalis").appendChild(script3);
    script3.type = 'text/javascript';
    script3.src = url + '/' + config.socketURL + '?t=' + Math.random();

    var script4 = document.createElement('script');
    document.getElementById("chatwidgettotalis").appendChild(script4);
    script4.type = 'text/javascript';
    script4.src = url + '/' + config.platformURL + '?t=' + Math.random();
    }



    var link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.type = 'text/css';
    link1.href = url + '/' + config.jqueryUICss + '?t=' + Math.random();
    link1.media = 'all';

    document.getElementById("chatwidgettotalis").appendChild(link1);


    var link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.type = 'text/css';
    link2.href = url + '/' + config.customCss + '?t=' + Math.random();
    link2.media = 'all';
    document.getElementById("chatwidgettotalis").appendChild(link2);

    var link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.type = 'text/css';
    link3.href = url + '/' + config.materialdesigniconsCss + '?t=' + Math.random();
    link3.media = 'all';
    document.getElementById("chatwidgettotalis").appendChild(link3);

    var script5 = document.createElement('script');
    document.getElementById("chatwidgettotalis").appendChild(script5);
    script5.type = 'text/javascript';
    script5.src = url + '/' + config.sweetalert;
    // script5.onload = defer;
    
    //adding css
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
    // document.getElementById("chatwidgettotalis").appendChild(sheet);

}



//html code of the widget
let html = `<div id="chatbxdv">
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
                        <div class=" " id="chatmsg"></div>
                    </div>
                    <div id="msg_typeing" style="color: #818181; font-weight: bold; text-align: left !important; margin-left: 10px; display: none;"></div>
                </div>
                <!-- Chatbox Body Part End -->
                <!-- Chatbox Footer Part Start -->
                <div class="justify-content-between align-items-center chatbox_footer" id="chatbox_footer">
                    <div class="position-relative d-flex" style="width: 98%;">
                        <i class="mdi mdi-emoticon-excited-outline chat_emoji"></i>
                        <input type="text" class="chat_msgbox" placeholder="Type a message..." id="message_chatwd" onkeydown="if(event.key == 'Enter' || event.keyCode == 13 || event.which == 13){msg_submit();};" />
                        <i class="mdi mdi-paperclip chat_fileclip" id="file_icon" hidden="true"><input id="file-input" onchange="readURL(this);"  type="file"/></i>
                        <div class="chatbox_fileUpload" id="file_icon">
                            <label for="file-input">
                                <i class="mdi mdi-paperclip chat_fileclip"></i>
                            </label>
                            <input id="file-input" onchange="readURL(this);" type="file" />
                        </div>
                    </div>
                    <!-- <div class="text-center align-items-center d-flex justify-content-center chat_microphone"><i class="mdi mdi-microphone "></i></div> -->
                    <div class="text-center align-items-center justify-content-center" id="msg">
                        <button class="text-center align-items-center d-flex justify-content-center chat_sendBtn" onclick="msg_submit();" style="position: absolute; right: 8px; top: 11px;"><i class="mdi mdi-send"></i></button>
                    </div>
                </div>
                <!-- Chatbox Footer Part End -->
            </div>
            <!-- Chatbox body End -->
        </div>
    </div>
</div>

<div class="modal fade" id="scrapModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true" style="width: 100%;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&#215;</span>
                </button>
            </div>
            <div class="modal-body">
                <img id="modal_img" src="" style="width: 100%;" />
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


//when click on chat widget
btn.addEventListener("click", () => {
    chatBox.classList.toggle("chatbox_mainsec--is-visible");
    if (chatBox.classList.contains("chatbox_mainsec--is-visible")) {
        btn.innerHTML = '<i class="mdi mdi-close"></i>';
    } else {
        btn.innerHTML = '<i class="mdi mdi-comment"></i>';
    }
});

// Draggable Function for Chatbox
$(function() {

    var draggableDiv = $('#chat_draggable').draggable();

    $('.chat_draggableSelect', draggableDiv).mousedown(function(ev) {

        draggableDiv.draggable('disable');
        draggableDiv.css({
            "cursor": "text"
        });
    }).mouseup(function(ev) {

        draggableDiv.draggable('enable');
        draggableDiv.css({
            "cursor": "move"
        });
    });
});

//get random number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//unique id for chat
var chat_id = Date.now()+getRndInteger(1000, 9999);


//when chick on submit or press enter
function msg_submit(mediaurls=null) {
    // alert(mediaurls)
    // return;
    let msg = $("#message_chatwd").val();
    let form = new FormData();
    form.append("chatid", chat_id);

    if(mediaurls==null)
    {
        form.append("message", msg);
        form.append("mediaurls", "");
        $("#message_chatwd").val(""); 
        //empty check
        if (msg == "") {
            return;
        }

        $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                          <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">You</span> <span class="text-right mb-2">${msg}</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                          <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                       </div>`);
        $('#chat').scrollTop($('#chat')[0].scrollHeight);
    }
    else
    {
        form.append("message", "file");
        form.append("mediaurls", mediaurls);
    }
    
    
    $.ajax({
        url: url + "/users/defaultchathandler",
        method: "POST",
        data: form,
        processData: false, // tell jQuery not to process the data
        contentType: false,
        success: function(result) {

            let chatData = JSON.parse(result);
            console.log(chatData);
            if (chatData.status == 1) {
                audioObj.play();

                let reply = chatData.reply;

                for (var i = 0; i < reply.length; i++) {

                    $("#chatmsg").append(`<div class="d-flex justify-content-end chat_loginuser">
                    <img src="${url}/public/faceassets/bot.png" class="rounded-circle chating_userimg" />
                          <span class="align-items-start d-flex  chat_collectuser_box flex-wrap"><span class="chat_msgname text-left" style="text-transform: none;">${chatData.chatbot_name}</span> <span class="text-left mb-2">${reply[i]}</span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                         
                       </div>`);
                    $('#chat').scrollTop($('#chat')[0].scrollHeight);
                }

            }

        }
    });
}

//get time in am or pm format
function get_time() {
    let time = new Date();
    return time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

}

//read the selected file and uoload to server
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
                          if(response.file_type=='image/png'||response.file_type=='image/jpg'||response.file_type=='image/jpeg'||response.file_type=='image/gif'){
                            
                           
                          $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                                <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">You</span> <span class="text-right mb-2"><a  href="#scrapModal" data-toggle="modal" data-table="${url}/${response.file}" ><img width="100%;"; src="${url}/${response.file}"/></a></span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                                <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                            </div>`);
                          }else{
                            $("#chatmsg").append(`<div class="d-flex justify-content-end chat_otheruser">
                                <span class="align-items-end d-flex justify-content-end chat_otheruser_box flex-wrap"><span class="chat_msgname text-right">You</span> <span class="text-right mb-2"><a download href="${url}/${response.file}"> FILE</a></span> <span class="chatmsg_time pl-1">${get_time()}</span></span>
                                <img src="${url}/public/faceassets/noresult.png" class="rounded-circle chating_userimg" />
                            </div>`);
                          }

                          
                          $('#chat').scrollTop($('#chat')[0].scrollHeight);
                          // console.log(url+"/"+response.file)

                          // send the file url to bot
                          msg_submit(url+"/"+response.file);
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

//modal to show chat image
$('#scrapModal').on('show.bs.modal', function (e) 
{
  var table = $(e.relatedTarget).data('table')
 
  $('#modal_img').attr('src', table)
 //console.log(table)
})