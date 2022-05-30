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
        iconBackground: '#FE294D',
      },
      white: {
        color: '#000000',
        secondaryColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: '#FFFFFF',
        iconBackground: '#FE294D',
      },
    },
  },
  reducers: {
    toggle(state) {
      console.log("state now = ", state.dark)
      state.dark = !state.dark;
    },
  },
});

export default toolkitSlice.reducer;
export const {toggle} = toolkitSlice.actions;
