var momObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();

	this.bigTailTimer = 0;
	this.bigTailCount = 0;

	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;

	this.momBodyCount = 0;
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight *0.5;
	this.angle = 0;
	this.bigEye.src ="./src/bigEye0.png";
	this.bigBody.src ="./src/bigSwim0.png";
}
momObj.prototype.draw = function()
{	
	//lerp x,y
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.99);

	//delta angle
	//Math.atan2(y, x)
	var deltaY = my -this.y;
	var deltaX = mx -this.x;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI//-PI PI

	//lerp angle

	this.angle = lerpAngle(beta, this.angle, 0.6);

	this.bigTailTimer += deltaTime;
	if(this.bigTailTimer > 50)
	{
		this.bigTailCount = (this.bigTailCount + 1) % 8;
		this.bigTailTimer %= 50;
	}

	//eye
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval)
	{
		this.momEyeCount = (this.momEyeCount +1) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if(this.momEyeCount ==0)
		{
			this.momEyeInterval = Math.random() *1500 + 2000;
		}else
		{
			this.momEyeInterval =200;
		}
	}
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var momEyeCount = this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height *0.5);
	var momBodyCount = this.momBodyCount;
	if(data.double == 1)//ora
	{
		ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width * 0.5, -momBodyOra[momBodyCount].height *0.5);
	}else
	{
		ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height  *0.5);
	}
	
	var bigTailCount = this.bigTailCount;
	ctx1.drawImage(bigTail[bigTailCount],-bigTail[bigTailCount].width * 0.5 + 30, -bigTail[bigTailCount].height *0.5);

	ctx1.restore();
}