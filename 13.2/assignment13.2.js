var array1 = []; 
array1.push(prompt('Enter user name :')); 

fetch('https://api.github.com/users/'+ array1).then(response => { 
    if(response.ok){    
            let data = response.json();
            return Promise.resolve(data);
    }else{
            return Promise.reject({
            status: response.status,
            statusText: response.statusText
        })
    }
}).then(function(data){ 
                console.log(data); 
                return "Success";
    }).catch(error => { 
        if(error.status == 404){
                console.log("Input user name is incorrect, 404 error");
                return "Input user name is incorrect, 404 error";
        }else{
                console.log(error); 
                return "Request failed";
        }
    });