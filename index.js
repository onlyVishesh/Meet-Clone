const characters = "abcdefghijklmnopqrstuvwxyz";

function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
}

let code =
    generateString(3) + "-" + generateString(4) + "-" + generateString(3);
document.title = "Meet - " + code;

document.querySelector(".code").innerText = code;

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}

document.querySelector(".time").innerText = formatAMPM(new Date());

setInterval(() => {
    document.querySelector(".time").innerText = formatAMPM(new Date());
}, 30000);

let userData = [
    {
        name: "Vishesh",
        profile: "images/userImage/download (7).jpeg",
        micStatus: "true",
    },

    {
        name: "Arin",
        profile: "images/userImage/download.jpeg",
        micStatus: "false",
    },
    {
        name: "Uncle Sam",
        profile: "images/userImage/download (1).jpeg",
        micStatus: "true",
    },
    {
        name: "Shreya",
        profile: "images/userImage/download (2).jpeg",
        micStatus: "false",
    },
    {
        name: "Nancy",
        profile: "images/userImage/download (3).jpeg",
        micStatus: "false",
    },
    {
        name: "Hana",
        profile: "images/userImage/download (4).jpeg",
        micStatus: "true",
    },

    {
        name: "Two Piece",
        profile: "images/userImage/download (5).jpeg",
        micStatus: "false",
    },
    {
        name: "Tommy",
        profile: "images/userImage/download (6).jpeg",
        micStatus: "false",
    },
];

let sortArray = (array) => {
    let trueArray = [];
    let falseArray = [];

    array.forEach((user) => {
        if (user.micStatus === "true") {
            trueArray.push(user);
        } else {
            falseArray.push(user);
        }
    });
    let newArray = trueArray.concat(falseArray);
    return newArray;
};

let displayUser = () => {
    let mainHTML = "";

    userData = sortArray(userData);

    let userDisplay = userData.length <= 8 ? userData.length : 8;

    for (let i = 0; i < userDisplay; i++) {
        mainHTML += `<div class="user" data-name="${userData[i].name}">
    <div class="mic-status">
      <img src="${
          userData[i].micStatus === "true"
              ? "images/open mic.png"
              : "images/mic-off.png"
      }" alt="">
    </div>
    <div class="profile">
      <img src="      ${userData[i].profile}
      " alt="">
    </div>
    <div class="name">
      ${userData[i].name}
    </div>
  </div>`;
    }

    document.querySelector(".main").innerHTML = mainHTML;

    if (userDisplay === 1) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${95}vw`;
            user.style.height = `${40}vw`;
        });
    } else if (userDisplay === 2) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${46}vw`;
            user.style.height = `${35}vw`;
        });
    } else if (userDisplay === 3) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${30}vw`;
            user.style.height = `${35}vw`;
        });
    } else if (userDisplay === 4) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${37}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 5 || userDisplay === 6) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${29}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 7 || userDisplay === 8) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${21}vw`;
            user.style.height = `${18}vw`;
        });
    }
};

displayUser();

document.querySelector(".audio").addEventListener("click", () => {
    if (
        document.querySelector(".audio").style.backgroundColor ===
        "rgb(234, 67, 53)"
    ) {
        document.querySelector(".audio").style.backgroundColor = "#3c4043";
        document.querySelector(".audio-img").src = "images/mic-on.png";
    } else {
        document.querySelector(".audio").style.backgroundColor = "#ea4335";
        document.querySelector(".audio-img").src = "images/mic-off.png";
    }
});

document.querySelector(".camera").addEventListener("click", () => {
    if (
        document.querySelector(".camera").style.backgroundColor ===
        "rgb(234, 67, 53)"
    ) {
        document.querySelector(".camera").style.backgroundColor = "#3c4043";
        document.querySelector(".camera-img").src = "images/video-camera.png";
    } else {
        document.querySelector(".camera").style.backgroundColor = "#ea4335";
        document.querySelector(".camera-img").src = "images/no-video.png";
    }
});

document.querySelector(".caption").addEventListener("click", () => {
    if (
        document.querySelector(".caption").style.backgroundColor ===
        "rgb(60, 64, 67)"
    ) {
        document.querySelector(".caption").style.backgroundColor = "#a6c6fa";
        document.querySelector(".caption-img").src = "images/subtitles (1).png";
    } else {
        document.querySelector(".caption").style.backgroundColor = "#3c4043";
        document.querySelector(".caption-img").src = "images/subtitles.png";
    }
});

document.querySelector(".present").addEventListener("click", () => {
    if (
        document.querySelector(".present").style.backgroundColor ===
        "rgb(60, 64, 67)"
    ) {
        document.querySelector(".present").style.backgroundColor = "#a6c6fa";
        document.querySelector(".present-img").src =
            "images/whiteboard (1).png";
    } else {
        document.querySelector(".present").style.backgroundColor = "#3c4043";
        document.querySelector(".present-img").src = "images/whiteboard.png";
    }
});

document.querySelector(".more-option").addEventListener("click", () => {
    if (document.querySelector(".dot-menu").style.display === "none") {
        document.querySelector(".dot-menu").style.display = "block";
        document.querySelector(".more-option").style.backgroundColor =
            "#a6c6fa";
        document.querySelector(".more-option-img").src = "images/dots (1).png";
    } else {
        document.querySelector(".dot-menu").style.display = "none";
        document.querySelector(".more-option").style.backgroundColor =
            "#3c4043";
        document.querySelector(".more-option-img").src = "images/dots.png";
    }
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".end-screen").style.display = "block";
});

document.querySelector(".rejoin").addEventListener("click", () => {
    document.querySelector(".end-screen").style.display = "none";
});

let layoutWhenSideMenuIsOpen = () => {
    userData = sortArray(userData);

    let userDisplay = userData.length <= 8 ? userData.length : 8;
    if (userDisplay === 1) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${75}vw`;
            user.style.height = `${40}vw`;
        });
    } else if (userDisplay === 2) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${35}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 3) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${31}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 4) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${31}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 5 || userDisplay === 6) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${21}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 7 || userDisplay === 8) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${16}vw`;
            user.style.height = `${14}vw`;
        });
    }
};

let layoutWhenSideMenuIsClose = () => {
    userData = sortArray(userData);

    let userDisplay = userData.length <= 8 ? userData.length : 8;
    if (userDisplay === 1) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${95}vw`;
            user.style.height = `${40}vw`;
        });
    } else if (userDisplay === 2) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${46}vw`;
            user.style.height = `${35}vw`;
        });
    } else if (userDisplay === 3) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${30}vw`;
            user.style.height = `${35}vw`;
        });
    } else if (userDisplay === 4) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${37}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 5 || userDisplay === 6) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${29}vw`;
            user.style.height = `${18}vw`;
        });
    } else if (userDisplay === 7 || userDisplay === 8) {
        document.querySelectorAll(".user").forEach((user) => {
            user.style.width = `${21}vw`;
            user.style.height = `${18}vw`;
        });
    }
};

function createInfoBlock() {
    if (document.querySelector(".right").style.display === "none") {
        document.querySelector(".right").style.display = "block";
        layoutWhenSideMenuIsOpen();

        document.querySelector(".members").style.display = "none";
        document.querySelector(".member").style.backgroundColor = "#202124";
        document.querySelector(".member-img").src = "images/group.png";
        document.querySelector(".chats").style.display = "none";
        document.querySelector(".chat").style.backgroundColor = "#202124";
        document.querySelector(".chat-img").src = "images/comment.png";
        document.querySelector(".right").innerHTML = `<div class="upper-right">
<div class="header">
  <div>Meeting Details</div>
  <div class="close-info">x</div>
</div>

<div class="joining-info">Joining info</div>
<div class="meet-url">https://meet.google.com/${code}</div>
<div class="copy-info">
  <img src="images/copy.png" alt="icon" style="width:1.5vw">
  Copy Joining info
</div>

</div>
<div>
<div class="extra-info">
  Google calendar attachment will be <br> shown here
</div>
</div>`;
        document.querySelector(".close-info").addEventListener("click", () => {
            document.querySelector(".right").style.display = "none";
            document.querySelector(".right").innerHTML = ``;
            document.querySelector(".info").style.backgroundColor = "#202124";
            document.querySelector(".info-img").src = "images/info.png";
            layoutWhenSideMenuIsClose();
        });
    } else {
        document.querySelector(".right").style.display = "none";
        document.querySelector(".right").innerHTML = ``;
        layoutWhenSideMenuIsClose();
    }

    if (
        document.querySelector(".info").style.backgroundColor ===
        "rgb(32, 33, 36)"
    ) {
        document.querySelector(".info").style.backgroundColor = "#a6c6fa";
        document.querySelector(".info-img").src = "images/info (1).png";
    } else {
        document.querySelector(".info").style.backgroundColor = "#202124";
        document.querySelector(".info-img").src = "images/info.png";
    }
}

document.querySelector(".info").addEventListener("click", () => {
    createInfoBlock();
});

function createUserList(userData) {
    let memberHTML = "";

    userData.forEach((user) => {
        memberHTML += `
  <div class="user-profile-data">
            <div><img src="${
                user.profile
            }" alt="" class="user-profile-data-img"></div>
            <div class="user-profile-data-name">${user.name}</div>
            <div><img src="
            ${
                user.micStatus === "true"
                    ? "images/open mic.png"
                    : "images/mic-off (1).png"
            }"
            alt="" class="user-profile-data-mic-img"></div>

            <div><abbr title="Remove"><img src="images/dots (1).png" alt="" class="user-profile-data-dots-img"><abbr></div>
          </div>`;
    });

    document.querySelector(".user-profiles-data").innerHTML = memberHTML;
}

function createMemberBlock() {
    if (document.querySelector(".members").style.display === "none") {
        document.querySelector(".members").style.display = "block";
        layoutWhenSideMenuIsOpen();

        document.querySelector(".right").style.display = "none";
        document.querySelector(".info").style.backgroundColor = "#202124";
        document.querySelector(".info-img").src = "images/info.png";
        document.querySelector(".chats").style.display = "none";
        document.querySelector(".chat").style.backgroundColor = "#202124";
        document.querySelector(".chat-img").src = "images/comment.png";
        document.querySelector(
            ".members"
        ).innerHTML = `<div class="upper-right">
    <div class="header">
      <div>People</div>
      <div class="close-info">x</div>
    </div>
    <div class="add-people">
      <div><img src="images/invite.png" alt="add people" class="add-people-img"></div>

      <div>Add people</div>
    </div>
    <div style="display: none;" class="add-people-form">
    <label for="">Name</label>
    <input type="text" class="add-people-form-name" placeholder="Name"><br>
    <label for="">Profile picture</label>
    <input type="number" min="1" max="10" class="add-people-form-pic" placeholder="1-10"><br>
    <label for="">Mic</label>
    
    <input type="radio" id="r1" name="mic-s" value="true" > On
    <input type="radio" id="r2" name="mic-s" value="false" > Off
<br>
    <button class="add">Add</button>

  </div>
    <div class="search-people">
      <div><img src="images/search.png" alt="" class="search-people-img"></div>
      <div><input type="text" placeholder="Search for people" class="search-people-input" ></div>
    </div>
  </div>
  <div class="member-list">
    <div class="member-list-heading">
      <div> IN MEETING</div>
      <div class="total-members-count">${userData.length}</div>
    </div>
    <div class="user-profiles-data">
    </div>
  </div>`;
        createUserList(userData);

        document.querySelector(".close-info").addEventListener("click", () => {
            document.querySelector(".members").style.display = "none";
            document.querySelector(".members").innerHTML = ``;
            document.querySelector(".member").style.backgroundColor = "#202124";
            document.querySelector(".member-img").src = "images/group.png";
            layoutWhenSideMenuIsClose();
        });
    } else {
        document.querySelector(".members").style.display = "none";
        document.querySelector(".members").innerHTML = ``;
        layoutWhenSideMenuIsClose();
    }

    if (
        document.querySelector(".member").style.backgroundColor ===
        "rgb(32, 33, 36)"
    ) {
        document.querySelector(".member").style.backgroundColor = "#a6c6fa";
        document.querySelector(".member-img").src = "images/group (1).png";
    } else {
        document.querySelector(".member").style.backgroundColor = "#202124";
        document.querySelector(".member-img").src = "images/group.png";
    }

    if (document.querySelector(".add-people")) {
        document.querySelector(".add-people").addEventListener("click", () => {
            if (
                (document.querySelector(".add-people-form").style.display =
                    "none")
            ) {
                document.querySelector(".add-people").style.display = "none";

                document.querySelector(".add-people-form").style.display =
                    "block";
            }
        });
    }

    document.querySelector(".add").addEventListener("click", () => {
        if (
            document.querySelector(".add-people-form-pic").value !== "" &&
            document.querySelector(".add-people-form-name").value !== ""
        ) {
            let picNo = document.querySelector(".add-people-form-pic").value;
            userData.push({
                name: `${
                    document.querySelector(".add-people-form-name").value
                }`,
                profile: `images/userImage/download (${(picNo =
                    picNo < 11 && picNo > 0
                        ? picNo
                        : Math.floor(Math.random() * 11))}).jpeg`,
                micStatus: document.querySelector('input[name="mic-s"]:checked')
                    .value,
            });
            displayUser();

            layoutWhenSideMenuIsOpen();
            document.querySelector(".total-members-count").innerText =
                userData.length;

            createUserList(userData);

            document.querySelector(
                'input[name="mic-s"]:checked'
            ).checked = false;

            document.querySelector(".add-people-form-name").value = "";
            document.querySelector(".add-people-form-pic").value = "";
            if (
                (document.querySelector(".add-people-form").style.display =
                    "block")
            ) {
                document.querySelector(".add-people-form").style.display =
                    "none";

                document.querySelector(".add-people").style.display = "flex";
            }

            document.querySelector(".right").style.display = "block";
            document.querySelector(".right").style.display = "none";
            document.querySelector(".members").style.display = "none";
            document.querySelector(".members").style.display = "block";
        }
    });

    remove();
}

document.querySelector(".member").addEventListener("click", () => {
    createMemberBlock();
});

function remove() {
    const divs = document.querySelectorAll(".user-profile-data-dots-img");
    const arr = Array.from(divs);
    for (const [index, div] of arr.entries()) {
        div.addEventListener("click", () => {
            const halfBeforeTheUnwantedElement = userData.slice(0, index);

            const halfAfterTheUnwantedElement = userData.slice(index + 1);

            userData = halfBeforeTheUnwantedElement.concat(
                halfAfterTheUnwantedElement
            );
            displayUser();

            layoutWhenSideMenuIsOpen();
            createUserList(userData);
            createInfoBlock();
            createMemberBlock();
        });
    }
}

let messageArray = [];

document.querySelector(".chat").addEventListener("click", () => {
    if (document.querySelector(".chats").style.display === "none") {
        document.querySelector(".chats").style.display = "block";
        layoutWhenSideMenuIsOpen();

        document.querySelector(".right").style.display = "none";
        document.querySelector(".info").style.backgroundColor = "#202124";
        document.querySelector(".info-img").src = "images/info.png";
        document.querySelector(".members").style.display = "none";
        document.querySelector(".member").style.backgroundColor = "#202124";
        document.querySelector(".member-img").src = "images/group.png";

        document.querySelector(".chats").innerHTML = `<div class="upper-right">
				<div class="header">
					<div>In-call Messages</div>
					<div class="close-info">x</div>
				</div>
			</div>

			<div class="chats-alert">Messages can be seen only by people in the call and are deleted when the calls ends</div>

			<div class="message-send">
				<div class="message-sender">
					<div class="message-sender-name">
					</div>
					<div class="message-sending-time">
					</div>
				</div>
				<div class="message-sender-message">
				</div>
			</div>
			<div class="take-message">
				<div><input type="text" placeholder="Send a Message" class="take-message-input"></div>
				<div>
					<img src="images/send.png" alt="" class="take-message-img">

				</div>
			</div>`;
        document.querySelector(".close-info").addEventListener("click", () => {
            document.querySelector(".chats").style.display = "none";

            document.querySelector(".chats").innerHTML = ``;
            document.querySelector(".chat").style.backgroundColor = "#202124";
            document.querySelector(".chat-img").src = "images/comment.png";
            layoutWhenSideMenuIsClose();
        });
    } else {
        document.querySelector(".chats").style.display = "none";
        document.querySelector(".chats").innerHTML = ``;
        layoutWhenSideMenuIsClose();
    }

    if (
        document.querySelector(".chat").style.backgroundColor ===
        "rgb(32, 33, 36)"
    ) {
        document.querySelector(".chat").style.backgroundColor = "#a6c6fa";
        document.querySelector(".chat-img").src = "images/comment (1).png";
    } else {
        document.querySelector(".chat").style.backgroundColor = "#202124";
        document.querySelector(".chat-img").src = "images/comment.png";
    }

    document
        .querySelector(".take-message-img")
        .addEventListener("click", () => {
            if (document.querySelector(".take-message-input").value !== "") {
                messageArray.push(
                    document.querySelector(".take-message-input").value
                );
                if (messageArray.length === 1) {
                    document.querySelector(".message-sender-name").innerHTML =
                        "Vishesh";
                    document.querySelector(".message-sending-time").innerHTML =
                        formatAMPM(new Date());
                    document.querySelector(
                        ".message-sender-message"
                    ).innerHTML = messageArray[0];
                } else {
                    let messageHTML = "";

                    messageArray.forEach((message) => {
                        messageHTML += message + "<br>";
                    });
                    document.querySelector(
                        ".message-sender-message"
                    ).innerHTML = messageHTML;
                }
                document.querySelector(".take-message-input").value = "";
            }
        });

    document
        .querySelector(".take-message-input")
        .addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                if (
                    document.querySelector(".take-message-input").value !== ""
                ) {
                    messageArray.push(
                        document.querySelector(".take-message-input").value
                    );
                    if (messageArray.length === 1) {
                        document.querySelector(
                            ".message-sender-name"
                        ).innerHTML = "Vishesh";
                        document.querySelector(
                            ".message-sending-time"
                        ).innerHTML = formatAMPM(new Date());
                        document.querySelector(
                            ".message-sender-message"
                        ).innerHTML = messageArray[0];
                    } else {
                        messageHTML = "";

                        messageArray.forEach((message) => {
                            messageHTML += message + "<br>";
                        });
                        document.querySelector(
                            ".message-sender-message"
                        ).innerHTML = messageHTML;
                    }
                    document.querySelector(".take-message-input").value = "";
                }
            }
        });
});
