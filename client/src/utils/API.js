import axios from "axios";

export default {
    // Retrieves Endorsements
    getEndorsements: function() {
        return axios.get("/api/endorsements");
    }
};
