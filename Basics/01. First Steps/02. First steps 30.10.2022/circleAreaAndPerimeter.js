function circleAreaAndPerimeter(input) {
    let r = input[0];
    let circle = Math.PI * (r *r);

    let perimeter = 2*Math.PI * r;

    console.log(circle.toFixed(2));
    console.log(perimeter.toFixed(2))
    


}

circleAreaAndPerimeter(["4.5"])