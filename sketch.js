
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,450,40)
	bobObject2 = new Bob(400,450,40)
	bobObject3= new Bob(600,450,40)
	bobObject4 = new Bob(800,450,40)
	bobObject5 = new Bob(1000,450,40)
	
	
	//rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
	//rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
	//rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
	//rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)

	//roof1=new Roof(width/2,270,width,20)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("red");
  

  
 

 // rope2.display();
  // rope3.display();
	//rope4.display();
	// rope5.display();

	// roof1.display();

}


