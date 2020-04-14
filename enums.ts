
enum Color { RED, GREEN, BLUE };
let color: Color = Color.BLUE;

// with custom indices
enum ColorNum { RED = 1, GREEN = 2, BLUE = 4 };
let colorNum: ColorNum = ColorNum.GREEN;

// with custom values as string
enum ColorStr { RED = 'RED', GREEN = 'GREEN', BLUE = 'BLUE' };
let colorStr: ColorStr = ColorStr.RED;

console.log(Color);