
const randomChar = () => {
    const chars = "QWEEEEEEERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    return chars.charAt(Math.floor(Math.random() * chars.length));
};

export default randomChar;