import axios from "axios";

const getUserCartDetails = async ( {userId} ) => {
    const url = process.env.REACT_APP_BASE_URL + "/cart-details";

    try {
        return await axios.get(url, {
          params: {
            userName: userId,
          },
        });
      } catch (error) {
        console.log(error);
      }
}

export default getUserCartDetails;
