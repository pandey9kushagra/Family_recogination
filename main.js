Webcam.set({
    width:350,
    height:300,
    image_format : "png",
    png_quality:90
})

Webcam.attach("#camera")

function picture(){

    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML="<img id='respic' src='" + pic +"'>"
    })
}

console.log("ml5 version :", ml5.version )

module = ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/5REu5Kyxj/model.json", modelloaded)


function modelloaded(){
    console.log("model has  loaded")
}

function check(){

   newimage =  document.getElementById("respic")
   module.classify(newimage, imgresult)
}

function imgresult(error,res){

    if(error){
        console.error(error)
    }
    else{
        console.log(res)

        document.getElementById("object").innerHTML = res[0].label
        document.getElementById("accuracy").innerHTML = res[0].confidence.toFixed(3)

    }
}