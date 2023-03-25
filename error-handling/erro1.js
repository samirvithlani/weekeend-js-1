const add = (event)=>{
    event.preventDefault();
    var age = document.getElementById('age').value;
    // if(age<18){
    //     throw new Error('You are not eligible to vote');
    // }
    // else{
    //     console.log('You are eligible to vote');
    // }

    try{
        if(age<18){
            throw new Error('You are not eligible to vote');
        }
        else{
            console.log('You are eligible to vote');
        }

    }catch(err){
            console.error(err);
    }
    finally{
        console.log('This is finally block');
    }
}