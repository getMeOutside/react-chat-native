const {createSlice} = require('@reduxjs/toolkit');

const toolkitSlice = createSlice({
  name: 'theme',
  initialState: {
    dark: false,
    colors: {
      dark: {
        color: '#FFFFFF',
        secondaryColor: '#DCDCDC',
        backgroundColor: '#2A2A2E',
        driverColor: '#545458',
        messageBackground: 'rgba(255, 255, 255, 0.2)',
        messageBackgroundOwner: '#0078FF',
      },
      white: {
        color: '#000000',
        secondaryColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: '#FFFFFF',
        driverColor: 'rgba(0, 0, 0, 0.04)',
        messageBackground: '#E9E9EB',
        messageBackgroundOwner: '#0078FF',
      },
    },
  },
  reducers: {
    toggle(state) {
      state.dark = !state.dark;
    },
  },
});

export default toolkitSlice.reducer;
export const {toggle} = toolkitSlice.actions;
