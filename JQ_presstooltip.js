/*bgp1IO- totip - <a href="#" onMouseOver="toolTip('Teks ToolTIP', 150)" onMouseOut="toolTip()">Teks Link</a> */ var OP = (navigator.userAgent.indexOf('Opera') != -1);var IE = (navigator.userAgent.indexOf('MSIE') != -1 && !OP);var GK = (navigator.userAgent.indexOf('Gecko') != -1);var SA = (navigator.userAgent.indexOf('Safari') != -1);var DOM = document.getElementById;var tooltip = null;
function ToolTIP() {this.width = 220; this.bgColor = "#011130";this.textFont = "Cataneo BT";this.textSize = 14;this.textColor = "#c8e4fc";this.border = "5px solid #777777";this.opacity = 85;
this.cursorDistance = 5;this.xPos = 'right';this.yPos = 'top';this.text = '';this.height = 0;this.obj = null;this.active = false;this.create = function() {if(!this.obj) this.init();var s = (this.textFont ? 'font-family:' + this.textFont + '; ' : '') + (this.textSize ? 'font-size:' + this.textSize + 'px; ' : '') + (this.border ? 'border:' + this.border + '; ' : '') + (this.textColor ? 'color:' + this.textColor + '; ' : ''); var t = '<table border=0 cellspacing=0 cellpadding=4 width=' + this.width + '><tr>' + '<td align=center' + (s ? ' style="' + s + '"' : '') + '>' + this.text + '</td></tr></table>';
if(DOM || IE) this.obj.innerHTML = t;if(DOM) this.height = this.obj.offsetHeight; else if(IE) this.height = this.obj.style.pixelHeight; if(this.bgColor) this.obj.style.backgroundColor = this.bgColor;this.setOpacity(); this.move();this.show();}
this.init = function() {if(DOM) this.obj = document.getElementById('bgsGR_ToolTip');
else if(IE) this.obj = document.all.ToolTip;}
this.move = function() {var winX = getWinX() - (((GK && !SA) || OP) ? 17 : 0);var winY = getWinY() - (((GK && !SA) || OP) ? 17 : 0);var x = mouseX;var y = mouseY; if(this.xPos == 'left') {if(x - this.width - this.cursorDistance >= getScrX())
x -= this.width + this.cursorDistance;else x += this.cursorDistance;}
else {if(x + this.width + this.cursorDistance > winX + getScrX())
x -= this.width + this.cursorDistance;else x += this.cursorDistance;}
if(this.yPos == 'top') {if(y - this.height - this.cursorDistance >= getScrY())
y -= this.height + this.cursorDistance;else y += this.cursorDistance;}
else {if(y + this.height + this.cursorDistance > winY + getScrY())
y -= this.height;else y += this.cursorDistance;}
this.obj.style.left = x + 'px';this.obj.style.top = y + 'px';}
this.show = function() {this.obj.style.zIndex = 69;this.active = true;
this.obj.style.visibility = 'visible';}
this.hide = function() {this.obj.style.zIndex = -1;
this.active = false;this.obj.style.visibility = 'hidden';}
this.setOpacity = function() {this.obj.style.opacity = this.opacity / 100;
this.obj.style.MozOpacity = this.opacity / 100;this.obj.style.KhtmlOpacity = this.opacity / 100;
this.obj.style.filter = 'alpha(opacity=' + this.opacity + ')';}}
function getScrX() {var offset = 0;if(window.pageXOffset)
offset = window.pageXOffset;else if(document.documentElement && document.documentElement.scrollLeft)
offset = document.documentElement.scrollLeft;else if(document.body && document.body.scrollLeft)
offset = document.body.scrollLeft;return offset;}
function getScrY() {var offset = 0;if(window.pageYOffset)
offset = window.pageYOffset;else if(document.documentElement && document.documentElement.scrollTop)
offset = document.documentElement.scrollTop;else if(document.body && document.body.scrollTop)
offset = document.body.scrollTop;return offset;}
function getWinX() {var size = 0;if(window.innerWidth)
size = window.innerWidth;else if(document.documentElement && document.documentElement.clientWidth)
size = document.documentElement.clientWidth;else if(document.body && document.body.clientWidth)
size = document.body.clientWidth;else size = screen.width;return size;}
function getWinY() {var size = 0;if(window.innerHeight)
size = window.innerHeight;else if(document.documentElement && document.documentElement.clientHeight)
size = document.documentElement.clientHeight;else if(document.body && document.body.clientHeight)
size = document.body.clientHeight;else size = screen.height;return size;}
function getMouseXY(e) {if(e && e.pageX != null) {mouseX = e.pageX;mouseY = e.pageY;}
else if(event && event.clientX != null) {mouseX = event.clientX + getScrX();
mouseY = event.clientY + getScrY();}
if(mouseX < 0) mouseX = 0;if(mouseY < 0) mouseY = 0;if(tooltip && tooltip.active) tooltip.move();}
function toolTip(text, width, opacity) {if(text) {tooltip = new ToolTIP();tooltip.text = text;
if(width) tooltip.width = width;if(opacity) tooltip.opacity = opacity;tooltip.create();}
else if(tooltip) tooltip.hide();}
document.write('<div id="bgsGR_ToolTip" style="position:absolute; visibility:hidden"></div>');
var mouseX = mouseY = 0;document.onmousemove = getMouseXY;
