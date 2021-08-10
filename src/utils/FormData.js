export default function fromData(data) {
    const Time = new Date(+data);
    let year = Time.getFullYear();
    let month = (Time.getMonth() + 1).toString().padStart(2, '0');
    let day = Time.getDay().toString().padStart(2, '0');
    return `${year}-${month}-${day}`
}