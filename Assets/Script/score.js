#pragma strict

var timer : float;
var endDelay : float;
var startDelay : float;

function Start () {
	timer  = 0.0f;
	endDelay = 7.0f;
	startDelay = 2.0f;
}

function Update () {

	//count garbage
	var garbageNum = 0;
	var garbages : GameObject[];
	garbages = GameObject.FindGameObjectsWithTag ("Garbage");
	for (var garbage : GameObject in garbages)  {  
		if(garbage.transform.position.y > 0.0f){
			garbageNum ++;
		}
	}
	//timer
	startDelay -= Time.deltaTime;
	if( 0 < garbageNum){
		if(startDelay < 0.0f){
			timer += Time.deltaTime;
		}
	}else{
		endDelay -= Time.deltaTime;
	}

	//garbage = GameObject.FindGameObjectsWithTag("Garbage").Length;
	
	// Set the text of the attached Text mesh
	
	if(0 < garbageNum){
		//Num and Time
		GetComponent(TextMesh).text = garbageNum + " left\n" + String.Format("{0:0.00}",timer);
	}else{
		//Clear!
		if(endDelay % 0.5f > 0.25f){
			GetComponent(TextMesh).text = " All Clear!\n" + String.Format("{0:0.00}",timer);
		}else{
			GetComponent(TextMesh).text = "";
		}
	}
	
	//Exit
	if( garbageNum <= 0 && endDelay < 0.0f){
		//replay
		 Application.LoadLevel("test5");
	}
}