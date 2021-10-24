#!/usr/bin/env node

const fileSystem=require("fs");
// let data=fileSystem.readFileSync("abc.txt","utf-8");
// console.log(data);
// // fileSystem.writeFileSync("def.txt","I am fine");

// console.log(process.argv);
// let fileName=process.argv[2]; //this is how we will take/recieve the input that we gave in terminal
// console.log(fileName);


//Taking Two files as Input

// let fileName1=process.argv[2];
// let fileName2=process.argv[3];

// let data1=fileSystem.readFileSync(fileName1,"utf-8");
// // let data2=fileSystem.readFileSync(fileName2,"utf-8");
// console.log(data1+"\n"+fileName2);


//Taking Multiple files as Input

let processData=process.argv;

if(processData[2]=="w")  //command to write in a file
{
    fileSystem.writeFileSync(processData[3],processData[4]);
}
else if(processData[2]=="a")  //command to append content in a file
{
    let previousData=fileSystem.readFileSync(processData[3],"utf-8");
    fileSystem.writeFileSync(processData[3],previousData+"\n"+processData[4]);
}
else if(processData[2]=="cr")    //command to create a new File
{
    fileSystem.writeFileSync(processData[3],"");
}
else {
    let data="";
    let k=false;
    for(let i=2;i<processData.length;i++)
    {
        if(processData.includes("ne"))  //command to remove all the empty lines from the file
      {
        if(!k)
        {
            i=i+1;
            k=true;
        }
        let tempData=fileSystem.readFileSync(processData[i],"utf-8");
        let lines=tempData.split("\n");
        if(tempData.includes("\r"))
        {
            lines=tempData.split("\r\n");
        }
        let finalData="";
        for(let j=0;j<lines.length;j++)
        {
            if(lines[j]!="")
            {
                finalData+=lines[j]+"\n";
            }
        }
        data+=finalData;
        console.log(data);
      }
    }
    if(processData[2]=="num")     //command to display each line of the file with numbering
    {
        data=fileSystem.readFileSync(processData[3],"utf-8");
        let lines=data.split("\n");
        if(data.includes("\r"))
        {
            lines.split("\r\n");
        }
        let lineNUM=lines.length;
        for(let i=1;i<=lineNUM;i++)
        {
            console.log(i+"."+ lines[i-1]);
        }
    }
    else if(processData[2]=="rev")  //command to display the content of file in reverse order
    {
        data=fileSystem.readFileSync(processData[3],"utf-8");
        let lines=data.split("\n");
        if(data.includes("\r"))
        {
            lines.split("\r\n");
        }
        const length=lines.length;
        for(let i=length-1;i>=0;i--)
        {
            console.log(lines[i]);
        }
    }
    else    //simply reading the content of file and printing it 
    {  
        data+="\n"+fileSystem.readFileSync(processData[i],"utf-8");
        console.log(data);  
    }
}


