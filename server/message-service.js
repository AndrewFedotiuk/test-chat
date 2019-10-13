const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

class Chat {
	async getLastMessages() {
		const messages = await Chat.parseModel();
		return messages.slice(1).slice(-10);
	}

	async addNewMessage({userName, message}) {
		const messages = await Chat.parseModel();
		messages.push(Chat.toJSON(userName, message, uuid()));

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, 'data', 'messages.json'),
				JSON.stringify(messages),
				(err)=>{
					if(err){
						reject(err);
					}else{
						resolve();
					}
				}
			)
		})
	}

	static toJSON(userName, message, id) {
		return {
			userName,
			message,
			id
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