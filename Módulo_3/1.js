// Primeira - 3.1

const delay = (n) => new Promise(resolve => setTimeout(resolve(n), 1000));

async function umPorSegundo(n) {
    try{
        var resp = await delay(n);
        console.log(resp)
    }catch(err){
        console.log(err);
    }
    
}

async function asyncCall(){
    await umPorSegundo(1);
    await umPorSegundo(2);
    await umPorSegundo(3);
}

asyncCall();