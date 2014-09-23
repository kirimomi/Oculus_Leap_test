#pragma strict

static var pos:Vector3 = Vector3.zero;

function Start () {
	if(pos != Vector3.zero){
		transform.position = pos;
	}
}

function Update () {

	var spd:float = 0.5f;
	
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.position += Time.deltaTime * Vector3( 0, -spd, 0);
	}
	
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.position += Time.deltaTime * Vector3( 0, spd, 0);
	}
	
	
	if(Input.GetKey(KeyCode.UpArrow)){
		transform.position += Time.deltaTime * Vector3( 0, 0, spd);
	}
	if(Input.GetKey(KeyCode.DownArrow)){
		transform.position += Time.deltaTime * Vector3( 0, 0, -spd);
	}
	
	pos = transform.position;

}