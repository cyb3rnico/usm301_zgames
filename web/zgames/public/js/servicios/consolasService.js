// ESTE ARCHIVO VA A TENER LAS OPERACIONES TIPICAS PARA COMUNICARSE CON EL CONTROLADOR

//getConsolas
const getConsolas = async (filtro = "todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/consolas/get"); // peticion hacia api
    }else{
        resp = await axios.get(`api/consolas/filtrar?filtro=${filtro}`);
    }
    return resp.data; //retornar la lista de consolas que estan en la base de datos
};


//crearConsola
const crearConsola =  async (consola)=>{ //arrow functions
    //Estructura de peticion POST al servidor con Axios
    // ruta, objeto y tipo de objeto
    let resp = await axios.post("api/consolas/post", consola, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return resp.data; //propiedad de axios que trae los datos que manda php
};

//findById
const findById = async (id)=>{
    let resp = await axios.get(`api/consolas/findById?id=${id}`);
    return resp.data;
}

const actualizarConsola = async(consola)=>{
    try{
        let resp = await axios.post("api/consolas/actualizar", consola, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
    
}

const eliminarConsola = async(id)=>{
    try{
        let resp = await axios.post("api/consolas/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){ //cualquier excepcion
        return false;
    }
};