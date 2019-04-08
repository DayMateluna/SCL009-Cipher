window.cipher = {
  encode: (offset,text) => {
  let ascii="";//numero ascii
  let ascii1="";//formula
  let result="";//cifrado y decifrado

  for(let i=0;i<text.length;i++)
  {  
   ascii=text.charCodeAt(i);//con esto guarda el codigo ascci en cada iteracion

    //if( ascii1>= 32 && ascii1<=64
   // if(ascii>=65 && ascii<=90)
  
    if(ascii>=65 && ascii <=90){
      ascii1=(ascii-65+offset)%26+65;//mayusculas
    }
    else if(ascii===32){
      ascii1=(ascii-32+offset)%1+32;//espacios
    }
    else if(ascii>=48 && ascii<=57){//numeros
     ascii1=(ascii-48+offset)%10+48;
    }
    else if(ascii>=97 && ascii<=122){//minuscula
      ascii1=(ascii-97+offset)%26+97;
    }
   
    else if(ascii>=33 && ascii<=47){//signos
      ascii1=(ascii-33+offset)%15+33;
    }

   // else if(ascii>=58 && ascii<=64){//mas signos
   //   ascii1=(ascii-58+offset)%7+58;
    //}

   
    //formula para obtener la posicion(numero) de la letra en nuestro abecedario
 
result += String.fromCharCode(ascii1);//trasforma el resultado de la formula en letra 
  }

  return result;
 
  },


    decode: (offset,text) => {
    let ascii="";
    let ascii1="";
    let result="";
  
    for(let i=0;i<text.length;i++){  

     ascii=text.charCodeAt(i);
     if(ascii >= 65 && ascii <= 90){//mayuscula
      ascii1=((ascii - 90 -parseInt(offset))% 26 + 90);
      

    }else if(ascii === 32){//espacio
      ascii1=((ascii - 32 -parseInt(offset))% 1 + 32);

    }else if(ascii>=48 && ascii<=57){//numeros
      ascii1=(ascii-48-parseInt(offset)%10+48);
     

    }else if(ascii>=97 && ascii<=122){//minuscula
      ascii1=(ascii-97-parseInt(offset)%26+97);

    }else if(ascii>=33 && ascii<=47){//signos
      ascii1= (ascii-33-parseInt(offset)%15+33);

      
    }
//else if(ascii>=57 && ascii<=64){
 // ascii1=(ascii-58-offset)%7+58;
//}



result += String.fromCharCode(ascii1);//trasforma el resultado de la formula en letra 
}

return result;
    }
    };
