const {createSlice} = require('@reduxjs/toolkit');

const messages = [
  {
    id: '1ewpof3fsdigsg2',
    chatName: 'Exceed chat 1',
    avatar: 'https://rostov.hh.ru/employer-logo/4103980.jpeg',
    lastMessage: {
      authorId: '1234253546erfsdf',
      authorName: 'test user1',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjle-j4tUVcP_2Ek06zIHSJ8FqBDw7JCjgxr0z_FM2_jUo_BJw0o3EXyctE-gRUk5dbbc&usqp=CAU',
      text: 'Hi there!',
      date: '13:30',
    },
  },
  {
    id: '1ewpofsdidg234sg23',
    chatName: 'Exceed chat 2',
    avatar: 'https://rostov.hh.ru/employer-logo/4103980.jpeg',
    lastMessage: {
      authorId: '1234253534rf46erfsdf',
      authorName: 'test user1',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjle-j4tUVcP_2Ek06zIHSJ8FqBDw7JCjgxr0z_FM2_jUo_BJw0o3EXyctE-gRUk5dbbc&usqp=CAU',
      text: 'Hi there!',
      date: '13:30',
    },
  },
  {
    id: '1ewpofs234dsd3figsg31',
    chatName: 'Exceed chat 3',
    avatar: 'https://rostov.hh.ru/employer-logo/4103980.jpeg',
    lastMessage: {
      authorId: '123425sdf3546erfsdf',
      authorName: 'test user1',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjle-j4tUVcP_2Ek06zIHSJ8FqBDw7JCjgxr0z_FM2_jUo_BJw0o3EXyctE-gRUk5dbbc&usqp=CAU',
      text: 'Hi there!',
      date: '13:30',
    },
  },
];

const exceedSlice = createSlice({
  name: 'messages',
  initialState: {
    count: 0,
    messages: messages,
    mentionedMessages: [],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addMessages(state, action) {
      state.messages.push(action.payload);
    },
    removeMessage(state, action) {
      state.messages.pop();
    },
  },
});

export default exceedSlice.reducer;
export const {increment, decrement, addMessages, removeMessage} =
  exceedSlice.actions;
