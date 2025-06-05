gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDOptionsButtonObjects1= [];
gdjs.Main_32MenuCode.GDOptionsButtonObjects2= [];
gdjs.Main_32MenuCode.GDQuitButtonObjects1= [];
gdjs.Main_32MenuCode.GDQuitButtonObjects2= [];
gdjs.Main_32MenuCode.GDShredderObjects1= [];
gdjs.Main_32MenuCode.GDShredderObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDMenuBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDMenuBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDGameLogoObjects1= [];
gdjs.Main_32MenuCode.GDGameLogoObjects2= [];
gdjs.Main_32MenuCode.GDDropperObjects1= [];
gdjs.Main_32MenuCode.GDDropperObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OptionsButton"), gdjs.Main_32MenuCode.GDOptionsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDOptionsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDOptionsButtonObjects1[k] = gdjs.Main_32MenuCode.GDOptionsButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Help", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Main_32MenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDQuitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDQuitButtonObjects1[k] = gdjs.Main_32MenuCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects1.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects1.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects1.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects1.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
