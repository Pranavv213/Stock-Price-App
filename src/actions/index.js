export const incNumber=(val)=>{

    return {
        type: "INCREMENT",
        value: val
    }
}

export const decNumber=()=>{

    return {
        type: "DECREMENT"
    }
}