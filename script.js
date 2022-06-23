ipEl = document.querySelector(".ip")
console.lo
locationEl = document.querySelector(".location")
time = document.querySelector(".time")
isp = document.querySelector(".isp")
searchBtn = document.getElementById("search-btn")

input = document.getElementById("input")
success =(postion)=>{
    latitude = postion.coords.latitude
    longitude = postion.coords.longitude
    map = L.map("map").setView([latitude,longitude],10)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


L.marker([latitude,longitude]).addTo(map)
console.log(longitude)
console.log(latitude)
 }
 error = ()=>{
 alert("unable to fetch you location")
 }

navigator.geolocation.getCurrentPosition(success, error)


 function searchIp(){
    
       inputValue = input.value
       if(inputValue===""){
           alert("please enter an ip address")
       }
       fetch("https://geo.ipify.org/api/v2/country?apiKey=at_kcSmtggiSNHyZzoEXvMxckXtcfeZ6&ipAddress="+inputValue)
       .then((response)=>response.json())
       .then(data=>{
           console.log(data)
           ipEl.innerHTML=data.ip
           locationEl.innerHTML = data.location.region
           isp.innerHTML= data.isp
          //  time.innerHTML = fetchUrlData.location.timezone
            time.innerHTML= `UTC ${data.location.timezone}`  
       })
    
     
          
         /* $(function () {      
               $.ajax({          
                    url: "https://geo.ipify.org/api/v1",         
                      data: {apiKey: "at_kcSmtggiSNHyZzoEXvMxckXtcfeZ6", ipAddress: inputValue},          
                       success: function(data) { 
                           console.log(data) 
                                 
                                
                             }      
                             });   
                             });*/
                         
                
     

 }

    
