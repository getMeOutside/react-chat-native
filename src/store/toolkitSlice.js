const {createSlice} = require('@reduxjs/toolkit');

const messages = [
  {
    id: '1ewpofsdigsg',
    userName: 'User One',
    avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/9D42/production/_124485204_tv075719297.jpg',
    text: 'Hi there!',
    date: '13:30',
  },
  {
    id: '1ewpofsdigsg2',
    userName: 'User Two',
    avatar: 'https://media.vanityfair.com/photos/62742932e9997d9f5fa12891/master/w_2560%2Cc_limit/GettyImages-1395371342.jpg',
    text: 'Hi there!',
    date: '13:30',
  },
  {
    id: '1ewpofsdigsg3',
    userName: 'User Three',
    avatar: 'https://image.cnbcfm.com/api/v1/image/106836975-1649975033425-elon2.jpg?v=1649975050',
    text: 'Hi there!',
    date: '13:30',
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
