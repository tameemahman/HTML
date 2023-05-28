let number=2;
let counter=0;

for(let i=1; i<=number; i++){
    
    if(number%i==0){
       counter=counter+1; 
    }
}

if(counter==2){
    console.log("Prime")
}

else{
    console.log("Not Prime" )
}

