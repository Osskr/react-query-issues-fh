
// retorna una promesa que hace dormir mi aplicacion o donde sea que la llame una x cantidad de segundos
export const sleep = (seconds: number = 1):Promise<boolean> =>{

return new Promise( (resolve)=>{
    setTimeout(() => {
        resolve(true)
    }, seconds*1000);
})

}