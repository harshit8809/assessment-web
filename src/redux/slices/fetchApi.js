import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: null,
    loading: 'idle',
    error: null,
  };


  export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const url ='https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port'
    try{
      const response = await fetch(url);
    const data = await response.json();
    return data;
    }catch(e){
      console.log("error while fetching data",e)
    }
    
  });

  const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.pending, (state)=>{
            state.loading = 'pending'
        })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.loading = 'fulfilled'
            state.data = action.payload
        })
        .addCase(fetchData.rejected, (state, action)=>{
            state.loading ='rejected'
            state.error = action.error.message
        })

    }

  })

  export default apiSlice.reducer