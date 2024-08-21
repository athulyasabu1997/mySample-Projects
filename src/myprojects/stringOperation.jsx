import React from "react";
import "./App.css";

function StringOperation() {
  let text = "Athulya Sabu"
  let text1 = "        Athulya Sabu           "
  let textExample = "Apple, Banana, Kiwi";
  let name = "Athulya Sabu Athulya Sabu"
  let text2 = "a,b,c,b,n"
  return <div>
    <p>{text.length}</p>
    <p>{text.charAt(2)}</p>
    <p>{text.charCodeAt(1)}</p>
    <p>{text.at(-4)}</p>
    <p>{text.at(2)}</p>
    <p>{text[8]}</p>
    <p>{textExample.slice(7,13)}</p>
    <p>{textExample.slice(7)}</p>
    <p>{textExample.slice(-8)}</p>
    <p>{textExample.substring(0,1)}</p>
    <p>{textExample.substr(7,8)}</p>
    <p>{text1.trim()}</p>
    <p>{text1.trimStart()}</p>
    <p>{text1.trimEnd()}</p>
    <p>{text.padStart(3,"0")}</p>
    <p>{text.padEnd(3,"1")}</p>
    <p>{text.replace("Athulya","Athira")}</p>
    <p>{text.replace(/athulya/i,"Athira")}</p>
    <p>{name.replace(/Athulya/g,"Athira")}/</p>
    <p>{text2.split(",")}</p>
  </div>;
}
export default StringOperation;
