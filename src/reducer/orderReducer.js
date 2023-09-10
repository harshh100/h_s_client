import toast from 'react-hot-toast';

const orderReducer = (state, action) => {

    switch (action.type) {
        case "SETUSERNAME":
            // console.log("name : " + action.payload)
            return {
                ...state,
                userName: action.payload,
            };

        case "SETUSERPHONE":
            // console.log("monumber : " + action.payload)
            const regex = /^[0-9]+$/;
            const checkphone = regex.test(action.payload) || action.payload === '';
            if (!checkphone) {
                toast.error("Enter Valid Phone Number")
                return { ...state }
            }
            return {
                ...state,
                userPhone: action.payload,
            };

        case "SETRECEIPTNO":
            const rn = action.payload + state.userName;
            return {
                ...state,
                receiptNo: rn,
            };


        case "SET_API_DATA":
            // const featureData = action.payload.filter((curElem) => {
            //     return curElem.featured === true;
            // });
            const featureData = action.payload.reduce((subitms, itm) => {
                subitms.push(...itm.subitms.filter((subitm) => subitm.featured === true));
                return subitms;
            }, []);

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
}

export default orderReducer;
