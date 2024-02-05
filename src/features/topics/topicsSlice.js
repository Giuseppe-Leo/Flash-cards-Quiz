import { createSlice } from "@reduxjs/toolkit";


export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic(state, action) {
            //const {id, name, icon} = action.payload;
             state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: [],

         }
        },
        addQuizId(state, action){
            //const {quizId, topicId} = action.payload;
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
         }
    }

});

export const selectTopics = (state) => state.topics.topics;

export const topicReducer = topicsSlice.reducer;
export const {addTopic, addQuizId} =  topicsSlice.actions;
