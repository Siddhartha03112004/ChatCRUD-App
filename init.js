const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
  .then(() => {
    console.log('connection succesfull');
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
  {
    from: 'neha',
    to: 'priya',
    msg: 'send me your exam result',
    created_at: new Date(),
  },
  {
    from: 'rahul',
    to: 'amit',
    msg: 'did you complete the assignment?',
    created_at: new Date(),
  },
  {
    from: 'sneha',
    to: 'kavya',
    msg: "let's meet after college",
    created_at: new Date(),
  },
  {
    from: 'arjun',
    to: 'rohit',
    msg: 'bro send me the notes please',
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);

// chat1.save().then((res) => {
//   //utc time format
//   console.log(res);
// });
