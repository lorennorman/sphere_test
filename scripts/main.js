RequireSystemScript("screen.js");

function game() 
{
	CreatePerson("Circle Man", "circle.rss", false);
	AttachInput("Circle Man");
	AttachCamera("Circle Man");
	MapEngine("valley_region.rmp", 60);
}

function change_map(map_name)
{
	FadeOut(700);
	Rectangle(0,0,GetScreenWidth(), GetScreenHeight(), Black);
	ChangeMap(map_name+".rmp");
	UpdateMapEngine();
	RenderMap();
	FadeIn(700);
}

function consume_keys()
{
	while(AreKeysLeft()) { GetKey(); }
}