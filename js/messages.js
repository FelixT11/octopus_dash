// MESSAGES COMPONENT

'use strict'

var massage = {
    title: 'Chats',
    massages: [
    {
      name: 'Aqilah',
      picture: 'images/aqilah.jpg',
      startOfMssage: 'Hello, how are you?'
    },
    {
      name: 'Falk',
      picture: 'images/falk.jpg',
      startOfMssage: 'Yes...'

    },
    {
      name: 'Arno',
      picture: 'images/arno.jpg',
      startOfMssage: 'I dont understand the...'

    },   
    {
      name: 'Tiffany',
      picture: 'images/tiffany.jpg',
      startOfMssage: 'Wait for me...'

    },  
    {
      name: 'Larah',
      picture: 'images/larah.jpg',
      startOfMssage: 'What exactly do you...'

    },  
    {
      name: 'Lennart',
      picture: 'images/lennart.jpg',
      startOfMssage: 'I cant wait to...'

    },  
    {
      name: 'Miri',
      picture: 'images/miri.jpg',
      startOfMssage: 'Sure, I know right :D'

    },  
    {
      name: 'Tylor',
      picture: 'images/tylor.jpg',
      startOfMssage: 'Why?'

    },  
    {
      name: 'Johannes',
      picture: 'images/johannes.jpg',
      startOfMssage: 'No, I was talking about...'

    },  
    {
      name: 'Martin',
      picture: 'images/martin.jpg',
      startOfMssage: 'Maybe tomorrow, but I...'

    }
    ]
}

Vue.component('messages', {
    template: `      
                <div class="chatMessage">

                    <section id="content">

                        <div id="windowChat">

                            <header>

                                Friends Group Chat

                            </header>

                            <ul id="chatroom">

                            </ul>

                            <footer>

                                <form name="msgForm" action="#">

                                    <input type="text" name="message" placeholder="your message!" size="50" autocomplete="off" autofocus><input type="submit" value="send">

                                </form>

                            </footer>

                        </div>

                    </section>

                    <section class="right">

                        <h2>{{ title }}</h2>

                        <div v-for="massage in massages">  
            
                        <ul>

                            <li>

                                <img :src="massage.picture"">

                                <h4>{{ massage.name }}</h4>

                                <p>{{ massage.startOfMssage }}</p>

                            </li>

                        </ul>
                        <hr>        
                    </div>
                    </section>

                </div>

              `,
      data: function() {
    return massage;
  }
});

var massagePage = new Vue({
    el: '#messagePage'
})







var Chat = function() {
	var _this = this;
	var owner = "";
	var chatRoom = document.getElementById("chatroom");
	var chatHeight = chatRoom.offsetHeight;
	var padding = 5;
	
	function getTimeStamp() {
    	var d = new Date();
    	var h = d.getHours();
    	var m = "0" + d.getMinutes();
    	var ampm = (h >= 12) ? "PM" : "AM";
    	h -= (h > 12) ? 12 : 0;
    	h = (h === 0) ? 12 : h;
    	
    	return h + ":" + m.substring(m.length - 2) + " " + ampm;
	}
	
	_this.displayMsg = function(msg) {
		
		var li = document.createElement("li");
		li.className = (msg.name === owner)? "self" : "other";
		
		var divPic = document.createElement("div");
		divPic.className = "pic";
		
		var divDate = document.createElement("div");
		divDate.className = "date";
		divDate.innerHTML = getTimeStamp();
		
		if(msg.imageUrl) {
			divPic.style.backgroundImage = "url('" + msg.imageUrl + "')";
		}
		
		var divMsg = document.createElement("div");
		divMsg.className = "msg";
		divMsg.innerHTML =  ((msg.name === owner) ? "Me" : msg.name) + ":<br>" + msg.text;
		
		li.appendChild(divDate);
		li.appendChild(divPic);
		li.appendChild(divMsg);
		
		chatRoom.appendChild(li);
		
		var size = chatRoom.children.length * 92;
		chatRoom.scrollTop = (size > chatHeight - padding) ? size + padding - chatHeight : 0;
	};
	
	_this.setOwner = function(ownerName) {
		owner = ownerName;
	};
	
	return _this;
};






document.body.onload = function() {
	var chatRoom = new Chat();
	var owner = "Felix";
	chatRoom.setOwner(owner);
	var chatSimulator = new MessagingSim(chatRoom);
	document.forms["msgForm"].onsubmit = function(event) {
		chatRoom.displayMsg({ 
			name:owner, 
			text: document.forms["msgForm"].message.value,
			imageUrl: "images/felix_small.jpg"
		});
		document.forms["msgForm"].message.value = "";
		event.preventDefault();
	}
};




var MessagingSim = function(chat) {
	var _this = this;
	var messageInterval;
	var index = 0;
	
	var messages = [
		{
		"name" : "Felix",
		"text" : "Hello",
		"imageUrl" : "images/felix_small.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "Hi!",
		"imageUrl" : "images/miriam.jpg"
		},
		{
		"name" : "Felix",
		"text" : "How are you?",
		"imageUrl" : "images/felix_small.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Hi guys!",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "Great! Having lunch...",
		"imageUrl" : "images/miriam.jpg"
		},
		{
		"name" : "Felix",
		"text" : "Do you want to join us?",
		"imageUrl" : "images/felix_small.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Of course, where are you?",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "We are at Octopus!",
		"imageUrl" : "images/miriam.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Ok! I'll see you there in a bit.",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Felix",
		"text" : "Nice!",
		"imageUrl" : "images/felix_small.jpg"
		},
		{
		"name" : "Paul",
		"text" : "I don't see you guys...",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Paul",
		"text" : "Are you in the restaurant?",
		"imageUrl" : "images/paul.jpg"
		},
		{
		"name" : "Miriam",
		"text" : "Yes! outside in the first table.",
		"imageUrl" : "images/miriam.jpg"
		},
		
	];
	
	function init() {
		sendMessage();
		messageInterval = setInterval(sendMessage, 1200);
	}
	
	function sendMessage() {
		if (index < messages.length) {
			setTimeout(function(msg) {
				chat.displayMsg(msg);
			}, Math.random() * 1000, messages[index]);
			index += 1;
		} else {
			clearInterval(messageInterval);
		}
	}
	
	init();
};





