import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get(( url ), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '9e3b89eaf6mshe9caa734767e106p1e47dfjsn27520dcc373d'
        }
    });
    
    return data;
}