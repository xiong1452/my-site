export default function fromData(data, detail = false) {
    const Time = new Date(+data);
    let year = Time.getFullYear();
    let month = (Time.getMonth() + 1).toString().padStart(2, '0');
    let day = Time.getDate().toString().padStart(2, '0');
    let str = `${year}-${month}-${day}`
    if(!detail){
        return str
    }
    if(detail){
        let hour = Time.getHours().toString().padStart(2, '0');
        let minute = Time.getMinutes().toString().padStart(2, '0');
        let Second = Time.getSeconds().toString().padStart(2, '0')
        return str+= ` ${hour}:${minute}:${Second}`
    }
}