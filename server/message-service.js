const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

class Chat {
	async getLastMessages() {
		const messages = await Chat.parseModel();
		return messages;
	}

	async addNewMessage(username, message) {
		const messages = await Chat.parseModel();
		messages.push(toJSON(username, message));

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, 'data', 'messages.json'),
				JSON.stringify(messages),
				(err)=>{
					if(err){
						reject(err);
					}else{
						resolve()
					}
				}
			)
		})
	}

	static toJSON(username, message) {
		return {
			username,
			message
		}
	}

	static parseModel() {
		return new Promise((resolve, reject) => {
			fs.readFile(
				path.join(__dirname, 'data', 'messages.json'),
				'utf-8',
				(err, content) => {
					if (err) {
						reject(err)
					} else {
						resolve(JSON.parse(content));
					}
				}
			)
		})

	}
}

module.exports = new Chat;