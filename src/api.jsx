import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const executeCommand = async (command) => {
    try {
        const reponse = await axios.post("${API_BASE_URL}/${Command}");
        return Response.data;
    }   catch(error) {
        console.error("Error al ejecutar el comando:", error);
        return "Error al ejecutar el comando.";
    }
};