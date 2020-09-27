import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 't0cph6x3G0IbfzEQ9BTLNYC5CwmtK8gJ';
const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState(''); 

    const fetch = async (tag) => {

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);

    }
    
    useEffect(() => {
        fetch(tag); 
    }, [tag]); 

    return {gif, fetch};
    
}

export default useGif;