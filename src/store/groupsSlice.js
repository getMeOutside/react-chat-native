const {createSlice} = require('@reduxjs/toolkit');

const messages = [
  {
    id: '1ewpof3sdigsg2',
    chatName: 'Chat One',
    avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    lastMessage: {
      authorId: '1234253546erfsdf',
      authorName: 'test user1',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjle-j4tUVcP_2Ek06zIHSJ8FqBDw7JCjgxr0z_FM2_jUo_BJw0o3EXyctE-gRUk5dbbc&usqp=CAU',
      text: 'Hi there!',
      date: '13:30',
    },
  },
  {
    id: '1ewpofsdig234sg23',
    chatName: 'Chat Two',
    avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    lastMessage: {
      authorId: '1234253534rf46erfsdf',
      authorName: 'test user1',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjle-j4tUVcP_2Ek06zIHSJ8FqBDw7JCjgxr0z_FM2_jUo_BJw0o3EXyctE-gRUk5dbbc&usqp=CAU',
      text: 'Hi there!',
      date: '13:30',
    },
  },
  {
    id: '1ewpofs234dsdfigsg31',
    chatName: 'Chat Three',
    avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    lastMessage: {
      authorId: '123425sdf3546erfsdf',
      authorName: 'test user1',
      authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjle-j4tUVcP_2Ek06zIHSJ8FqBDw7JCjgxr0z_FM2_jUo_BJw0o3EXyctE-gRUk5dbbc&usqp=CAU',
      text: 'Hi there!',
      date: '13:30',
    },
  },
];

const toolkitSlice = createSlice({
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

export default toolkitSlice.reducer;
export const {increment, decrement, addMessages, removeMessage} =
  toolkitSlice.actions;
