// Modal
// ====================
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});

// $('.modal-trigger').leanModal({
//       dismissible: true, // Modal can be dismissed by clicking outside of the modal
//       opacity: .5, // Opacity of modal background
//       in_duration: 300, // Transition in duration
//       out_duration: 200, // Transition out duration
//       starting_top: '4%', // Starting top style attribute
//       ending_top: '10%', // Ending top style attribute
//       ready: function() { alert('Ready'); }, // Callback for Modal open
//       complete: function() { alert('Closed'); } // Callback for Modal close
//     }
//   );

// Login Logic
// prompt.get(["userPrompt"], function (err, initialPrompt) {
//     console.log("Login or Create New User: " + initialPrompt.userPrompt);
//     if (initialPrompt.userPrompt === "Create") {
//     	createNewUser();
//     } else if (initialPrompt.userPrompt === "Login") {
//     	userLogin();
//     };
// });

// // Create New User
// function createNewUser() {
// 	prompt.get({
// 		properties: {
// 			username: {
// 				message: 'what is your username?'
// 			},
// 			password: {
// 				message: 'what is your password?',
// 				hidden: true
// 			}
// 		}
// 	}, function (err, promptResult) {
// 	    console.log("Username: " + promptResult.username);
// 	    console.log("Password: " + promptResult.password);
// 	    addNewUser(promptResult);
// 	});
// };

// function addNewUser(userInfo) {
// 	connection.query('INSERT INTO users SET ?',  [
// 		{
// 			username: userInfo.username, 
// 			password: userInfo.password
// 		}
// 	], function(err, insertResult) {
// 		// console.log('should be inserted')
// 		// readUsers(insertResult);
// 	});

// };

// function userLogin() {
// 	prompt.get({
// 		properties: {
// 			username: {
// 				message: 'what is your username?'
// 			},
// 			password: {
// 				message: 'what is your password?',
// 				hidden: true
// 			}
// 		}
// 	}, function (err, loginResult) {
// 	    console.log("Username: " + loginResult.username);
// 	    console.log("Password: " + loginResult.password);
// 	    validateUser(loginResult);
// 	});
// };

// function validateUser(loginCredentials) {
// 	connection.query('SELECT * FROM users WHERE ?', [
// 		{
// 			USERNAME: loginCredentials.username
// 		}
// 	], function(err, userValidateResult){
// 		console.log(userValidateResult[0].username, userValidateResult[0].password);
// 		if (loginCredentials.password === userValidateResult[0].password) {
// 			console.log('correct!, logged in');
// 		} else {
// 			console.log('gtfo');
// 			userLogin();
// 		}
// 	})
// }

// // will display all user names and passwords //
// function readUsers(readUserInfo) {
// 	connection.query('SELECT * FROM users', function(err, readUserInfo) {
// 		if(err) throw err;
// 		for (var i = 0; i < readUserInfo.length; i++) {
// 			console.log("==========================\n" + "Username: " + readUserInfo[i].username + "|| Password: " + readUserInfo[i].password);
// 		};
// 	});
// };