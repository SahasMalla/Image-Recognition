Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
    });
}

console.log('ml5 version -', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FNR-VDmw5/model.json', modelLoaded);
function modelLoaded()
{
    console.log("Model_Loaded");
}

function check()
{
   img = document.getElementById("captured_img");
   classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }

    else
    {
        console.log(results);
    }
}