var model;

async function loadModel() {
      console.clear();
      const xlabel = [[0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.33,0.73,0.62,0.59,0.24,0.14,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.87,1.00,1.00,1.00,1.00,0.95,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.67,0.20,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.26,0.45,0.28,0.45,0.64,0.89,1.00,0.88,1.00,1.00,1.00,0.98,0.90,1.00,1.00,0.55,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.07,0.26,0.05,0.26,0.26,0.26,0.23,0.08,0.93,1.00,0.42,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.33,0.99,0.82,0.07,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.09,0.91,1.00,0.33,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.51,1.00,0.93,0.17,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.23,0.98,1.00,0.24,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.52,1.00,0.73,0.02,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.04,0.80,0.97,0.23,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.49,1.00,0.71,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.29,0.98,0.94,0.22,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.07,0.87,1.00,0.65,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.01,0.80,1.00,0.86,0.14,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.15,1.00,1.00,0.30,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.12,0.88,1.00,0.45,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.52,1.00,1.00,0.20,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.24,0.95,1.00,1.00,0.20,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.47,1.00,1.00,0.86,0.16,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.47,1.00,0.81,0.07,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00]];

      const myTensor = tf.tensor(xlabel);
      model = await tf.loadGraphModel('TFJS/model.json');
      var result = model.predict(myTensor);
      result.print();
    }

function predictImage(){
  console.clear();

  //console.log("Predicting...");

  //loading the image 
  let image =  cv.imread(canvas);
  

  // Gray scaling
  cv.cvtColor(image,image,cv.COLOR_RGBA2GRAY,0);
  
  //Increasing contrast
  cv.threshold(image,image,175,255,cv.THRESH_BINARY);


  //finding the contours so that we can crop and find the center of mass
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  cv.findContours(image,contours,hierarchy,cv.RETR_CCOMP,cv.CHAIN_APPROX_SIMPLE);
  

  //Croping the image
  let cnt = contours.get(0);
  let rect = cv.boundingRect(cnt);
  image =image.roi(rect);

  //resizeing
  var height = image.rows;
  var width  = image.cols;

  if (height > width){
    height=20;
    const scaleFactor = image.rows/height;
    width = Math.round(image.cols/scaleFactor);
  } else {
    width=20;
    const scaleFactor = image.cols/width;
    height = Math.round(image.rows/scaleFactor);
  }

  let dsize= new cv.Size(width,height);
  cv.resize(image,image,dsize,0,0,cv.INTER_AREA);


  //adding padding to images
  const LEFT   = Math.ceil(4+(20-width)/2);
  const RIGHT  = Math.floor(4+(20-width)/2);
  const TOP    = Math.ceil(4+(20-height)/2);
  const BOTTOM = Math.floor(4+(20-height)/2);

  //console.log(`LEFT: ${LEFT} RIGHT: ${RIGHT} TOP: ${TOP} BOTTOM: ${BOTTOM}`)
  
  const BLACK = new cv.Scalar(0,0,0,0);
  
  cv.copyMakeBorder(image,image,TOP,BOTTOM,LEFT,RIGHT,cv.BORDER_CONSTANT,BLACK);



  //Center of Mass
  cv.findContours(image,contours,hierarchy,cv.RETR_CCOMP,cv.CHAIN_APPROX_SIMPLE);
  cnt = contours.get(0);

  const Moments = cv.moments(cnt,false);

  const cx = Moments.m10 / Moments.m00;
  const cy = Moments.m01 / Moments.m00;
  //console.log(`M00: ${Moments.m00}, cx:${cx} , cy: ${cy}`)
  




  //Shifting
  const X_SHIFT = Math.round(image.cols / 2.0 - cx);
  const Y_SHIFT = Math.round(image.rows / 2.0 - cy);

  //console.log(`X_SHIFT: ${X_SHIFT} , Y_SHIFT: ${Y_SHIFT}`);

  var newSize = new cv.Size(image.cols,image.rows);
  const M =  cv.matFromArray(2,3,cv.CV_64FC1 , [1,0,X_SHIFT,0,1,Y_SHIFT]);
  cv.warpAffine(image,image,M,newSize,cv.INTER_LINEAR,cv.BORDER_CONSTANT,BLACK);


  //normalize

  let pixelValues = image.data;
  
  pixelValues     = Float32Array.from(pixelValues);
  
  pixelValues =pixelValues.map(function(item){return item/255.0;});

  //console.log(`Normalized Pixels ${pixelValues}`);


  const X = tf.tensor([pixelValues]);

  //console.log(`Tensor Shape: ${X.shape}`);

  //console.log(`Data  Type:  ${X.dtype}`);




  //Prediction
  const result = model.predict(X);
  result.print();

  const output = result.dataSync()[0];

  //Test
  // const output = document.createElement('CANVAS');
  // cv.imshow(output,image);
  // document.body.appendChild(output);


  //Clean up
  M.delete();
  image.delete();
  contours.delete();
  hierarchy.delete();
  cnt.delete();

  //Clearning Tensors
  X.dispose();
  result.dispose();

  return output;

}