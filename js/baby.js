var babyObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
<<<<<<< HEAD

	this.babyTailTimer = 0;
	this.babyTailCount = 0;
=======
	this.babyTail = new Image();
>>>>>>> origin/master

}
babyObj.prototype.init = function()
{
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
<<<<<<< HEAD
=======
	this.babyTail.src = "./src/babyTail0.png";
>>>>>>> origin/master
}
babyObj.prototype.draw = function()
{	
	//lerp x,y
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);

	//lerp angele
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI//-PI PI

	//lerp angle
<<<<<<< HEAD
	this.angle = lerpAngle(beta, this.angle, 0.6);

	//baby tail count
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50)
	{
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}
=======

	this.angle = lerpAngle(beta, this.angle, 0.6);
>>>>>>> origin/master
	//ctx1
	ctx1.save();
	//translate;
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
<<<<<<< HEAD

	var babyTailCount = this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 23, -babyTail[babyTailCount].height * 0.5);
=======
	ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5);
>>>>>>> origin/master
	ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
	ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);
	

	ctx1.restore();
}

function dw()
{
	console.log(1);
}