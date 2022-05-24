const {createSlice} = require('@reduxjs/toolkit');

const categories = [
  {
    title: 'Диалоги',
    hasNewMessages: false,
  },
  {
    title: 'Exceed',
    hasNewMessages: true,
  },
  {
    title: 'Группы',
    hasNewMessages: true,
  },
];

const messages = [
  {
    userName: 'User One',
    avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/9D42/production/_124485204_tv075719297.jpg',
    text: 'Hi there!',
    date: '13:30',
  },
  {
    userName: 'User Two',
    avatar: 'https://media.vanityfair.com/photos/62742932e9997d9f5fa12891/master/w_2560%2Cc_limit/GettyImages-1395371342.jpg',
    text: 'Hi there df sdf sd fsdf sdf sdf sdfdfgdf gadf gad fgad fgad f!',
    date: '13:30',
  },
  {
    userName: 'User Three',
    avatar: 'https://image.cnbcfm.com/api/v1/image/106836975-1649975033425-elon2.jpg?v=1649975050',
    text: 'Hi there!',
    date: '13:30',
  },
];

const chatsSlice = createSlice({
  name: 'toolkit',
  initialState: {
    categories: categories,
    messages: messages,
  },
  reducers: {
    // updateCategories(state) {
    //   state.categories = state.count + 1;
    // },
    updateMessages(state) {
      state.categories = state.categories.push({
        userName: 'NEW MESSAGE',
        avatar: 'https://image.cnbcfm.com/api/v1/image/106836975-1649975033425-elon2.jpg?v=1649975050',
        text: 'Hi there, that is new message for u =)',
        date: '13:30',
      });
    },
  },
});

export default chatsSlice.reducer;
export const {updateMessages} = chatsSlice.actions;
