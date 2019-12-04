export const increment= (context, payload) => {
    context.commit('increment', payload);
};

export const decrement= (context, payload) => {
    context.commit('decrement', payload);
};
export const asyncIncrement= (context, payload) => {
    setTimeout(() =>{
        context.commit('increment', payload.by);
    }, payload.duration);
};
export const asyncDecrement= (context, payload) => {
    setTimeout(() =>{
        context.commit('decrement', payload.by);
    }, payload.duration);
};