export const TILE=64;
export const MAP=[
'111111111111111111',
'100000000000000001',
'102200001100003001',
'100000001100000001',
'100011000000110001',
'100011000000110001',
'100000000000000001',
'101100033300001101',
'101100000000001101',
'100000000000000001',
'100011000000110001',
'100011000000110001',
'100000001100000001',
'100220001100002001',
'100000000000000001',
'111111111111111111'];
export const WEAPONS=[
{id:'pistol',name:'VX-9 PISTOL',damage:28,rate:3.5,mag:12,reserve:72,reload:1.35,range:900,recoil:.035,spread:.012,head:2.2,pellets:1,auto:false,color:'#7deaff'},
{id:'ar',name:'ASTRA AR-6',damage:23,rate:9.2,mag:30,reserve:180,reload:1.75,range:1050,recoil:.055,spread:.018,head:1.8,pellets:1,auto:true,color:'#63e4ff'},
{id:'smg',name:'NOVA SMG',damage:16,rate:14,mag:42,reserve:210,reload:1.55,range:720,recoil:.04,spread:.03,head:1.65,pellets:1,auto:true,color:'#a27cff'},
{id:'shotgun',name:'BREACH-12',damage:15,rate:1.25,mag:8,reserve:48,reload:2.15,range:470,recoil:.16,spread:.11,head:1.35,pellets:8,auto:false,color:'#ffb25f'},
{id:'sniper',name:'LANCE RAIL',damage:115,rate:.72,mag:5,reserve:25,reload:2.6,range:1800,recoil:.23,spread:.002,head:2.5,pellets:1,auto:false,color:'#e47dff'}];
export const ENEMIES={soldier:{name:'Soldier',hp:80,speed:84,damage:8,range:380,rate:1.25,score:100,color:'#ff6579',radius:18},fast:{name:'Rusher',hp:50,speed:145,damage:13,range:60,rate:1.5,score:140,color:'#ff9b57',radius:15},heavy:{name:'Bulwark',hp:230,speed:48,damage:16,range:330,rate:.65,score:300,color:'#9b76ff',radius:25},ranged:{name:'Marksman',hp:65,speed:62,damage:19,range:610,rate:.42,score:220,color:'#66d9ff',radius:17},boss:{name:'WARDEN PRIME',hp:1350,speed:56,damage:22,range:520,rate:1.05,score:2500,color:'#f055d1',radius:38}};
export const DIFFICULTY={recruit:{enemyDamage:.65,enemyHealth:.8,spawn:.78},operative:{enemyDamage:1,enemyHealth:1,spawn:1},astra:{enemyDamage:1.4,enemyHealth:1.25,spawn:1.3}};
export const DEFAULT_SETTINGS={sensitivity:1,volume:.7,quality:'high',shake:true,difficulty:'operative',bindings:{forward:'KeyW',back:'KeyS',left:'KeyA',right:'KeyD',reload:'KeyR',sprint:'ShiftLeft',crouch:'KeyC',jump:'Space',melee:'KeyV',interact:'KeyE',pause:'Escape'}};
