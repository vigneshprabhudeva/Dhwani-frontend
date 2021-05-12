import {useEffect,useState} from 'react'
import CreditShow from './CreditShow'
import useClipboard from 'react-hook-clipboard'
import {useRef} from 'react'
function Creditcard(){
  const inputRef1=useRef(null)
  const inputRef2=useRef(null)
  const inputRef3=useRef(null)
  const inputRef4=useRef(null)
  var text=""
    let  [clipboard, copyToClipboard] = useClipboard()
    let  [clip,setclip] = useState([""])
  console.log(clipboard)
  
  
	let [card,setcard]=useState([])
	let [title,settitle]=useState("")
	useEffect(() => {
  	let first=document.getElementById("value1")
	     first.focus()
		let otp = document.getElementById("pin")
	for(let pin of otp.children) {
	
    pin.onkeypress = function() {
        if(pin.nextElementSibling) {
            pin.nextElementSibling.focus();
        }
    }
    pin.onpaste = function() {
    	  setTimeout(function(){
        if(pin.nextElementSibling) {
            pin.nextElementSibling.focus();
        }     
    }, 0)

       
    }
}








   

async function pasteclip() {
  text = await navigator.clipboard.readText();
  setclip(text.split(""))
  console.log(clip)

  
    
}
  


  














document.getElementById('pin').addEventListener('keydown', function (event) {
	console.log(event)
    if (event.keyCode == 8) {
       let a=inputRef1.current.value.split("")
       let b=inputRef2.current.value.split("")
       let c=inputRef3.current.value.split("")
       let d=inputRef4.current.value.split("")


       if (d.length>0) {
       	var newArr4=d.slice(0,-1)
       	console.log(newArr4)
       	inputRef4.current.value=newArr4.join('')
     


       }else if(c.length>0){
       inputRef3.current.focus()
       	var newArr3=c.slice(0,-1)
       	inputRef3.current.value=newArr3.join('')

       }else if(b.length>0){
       	inputRef2.current.focus()
       	var newArr2=b.slice(0,-1)
       	inputRef2.current.value=newArr2.join('')

       }else if(a.length>0){
       	inputRef1.current.focus()
       	var newArr1=a.slice(0,-1)
       	inputRef1.current.value=newArr1.join('')

       }



       
        
    }
})

document.getElementById('pin').addEventListener('paste', async function (event) {
  
  text = await navigator.clipboard.readText();
  console.log(text)

   let clipbarrdarr=text.split("")
    console.log(clipbarrdarr)
    if (clipbarrdarr.length<15) {
      
    }
    else{
     inputRef1.current.value=clipbarrdarr.slice(0,4).join("")
     inputRef2.current.value=clipbarrdarr.slice(4,8).join("")
      inputRef3.current.value=clipbarrdarr.slice(8,12).join("")
      inputRef4.current.value=clipbarrdarr.slice(12,16).join("")
      inputRef1.current.focus()
  


    }
   
})
   


  },[]);



	function submit(){
		
	     let a=inputRef1.current.value
       let b=inputRef2.current.value
       let c=inputRef3.current.value
       let d=inputRef4.current.value
       let no=a+b+c+d
       let newarr=card.concat(no)
     console.log(no.length)
     if (no.length<1) {
      alert("enter some value")
     }else if (no.length<16) {
      alert("credit card number should be atleast 16 digits")
     }else if (isNaN(no)) {
      alert("value should be only numbers")
     }
     else{
      settitle("Credit card details")
      setcard(newarr)

     }
       
       console.log(card)

	}
	function deleteone(indextodel){
		
		let updatedarr=card.filter(function(val,index){
			if (indextodel==index) {
				return false
			}else return true
		})

		setcard(updatedarr)
		alert(`${indextodel}th item deleted`)

	}

 
  




	
	return(
		<div>
		
		<div class="pin" id="pin">
    <h3>ENTER CREDIT CARD NUMBER</h3>
    <input type="text" id="value1" placeholder="0" maxLength="4" class="num" focus="true" ref={inputRef1}/> 
    <input type="text" id="value2" placeholder="0" maxlength="4" class="num" ref={inputRef2}/> 
    <input type="text" id="value3" placeholder="0" maxlength="4" class="num" ref={inputRef3}/> 
    <input type="text" id="value4" placeholder="0" maxlength="4" class="num" ref={inputRef4}/> 
    
</div>


<button onClick={submit}>submit</button>
<CreditShow card={card} deleteone={deleteone} title={title}/>

		</div>
		)

	}
export default Creditcard