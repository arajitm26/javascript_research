var Calendar = function (t) {
	this.divId = t.RenderID ? t.RenderID : '[data-render="calendar"]', this.DaysOfWeek = t.DaysOfWeek ? t.DaysOfWeek : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], this.Months = t.Months ? t.Months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var e = new Date;
	this.CurrentMonth = e.getMonth(), this.CurrentYear = e.getFullYear();
	var r = t.Format;
	this.f = "string" == typeof r ? r.charAt(0).toUpperCase() : "M"
};
Calendar.prototype.nextMonth = function () {
	11 == this.CurrentMonth ? (this.CurrentMonth = 0, this.CurrentYear = this.CurrentYear + 1) : this.CurrentMonth = this.CurrentMonth + 1, this.divId = '[data-active="false"] .render', this.showCurrent()
}, Calendar.prototype.prevMonth = function () {
	0 == this.CurrentMonth ? (this.CurrentMonth = 11, this.CurrentYear = this.CurrentYear - 1) : this.CurrentMonth = this.CurrentMonth - 1, this.divId = '[data-active="false"] .render', this.showCurrent()
}, Calendar.prototype.previousYear = function () {
	this.CurrentYear = this.CurrentYear - 1, this.showCurrent()
}, Calendar.prototype.nextYear = function () {
	this.CurrentYear = this.CurrentYear + 1, this.showCurrent()
}, Calendar.prototype.showCurrent = function () {
	this.Calendar(this.CurrentYear, this.CurrentMonth)
}, Calendar.prototype.checkActive = function () {
	1 == document.querySelector(".months").getAttribute("class").includes("active") ? document.querySelector(".months").setAttribute("class", "months") : document.querySelector(".months").setAttribute("class", "months active"), "true" == document.querySelector(".month-a").getAttribute("data-active") ? (document.querySelector(".month-a").setAttribute("data-active", !1), document.querySelector(".month-b").setAttribute("data-active", !0)) : (document.querySelector(".month-a").setAttribute("data-active", !0), document.querySelector(".month-b").setAttribute("data-active", !1)), setTimeout(function () {
		document.querySelector(".calendar .header").setAttribute("class", "header active")
	}, 200), document.querySelector(".debtor_calendar_wrap").setAttribute("data-theme", this.Months[document.querySelector('[data-active="true"] .render').getAttribute("data-month")].toLowerCase())
}, Calendar.prototype.Calendar = function (t, e) {
	// alert(e);
	"number" == typeof t && (this.CurrentYear = t), "number" == typeof t && (this.CurrentMonth = e);
	var r = (new Date).getDate(),
		n = (new Date).getMonth(),
		a = (new Date).getFullYear(),
		o = new Date(t, e, 1).getDay(),
		i = new Date(t, e + 1, 0).getDate(),
		u = 0 == e ? new Date(t - 1, 11, 0).getDate() : new Date(t, e, 0).getDate(),
		s = "<span>" + this.Months[e] + "   " + t + "</span>",
		d = '<div class="table">';
		var month=this.Months[e];
		var year=t;

		// alert("Month :"+month);alert("Year :"+year);
	d += '<div class="row head">';
	for (var c = 0; c < 7; c++) d += '<div class="week_cell">' + this.DaysOfWeek[c] + "</div>";
	d += "</div>";
	for (var h, l = dm = "M" == this.f ? 1 : 0 == o ? -5 : 2, v = (c = 0, 0); v < 6; v++) {
		d += '<div class="row">';
		for (var m = 0; m < 7; m++) {
			if ((h = c + dm - o) < 1){d += '<div class="cell disable">' + (u - o + l++) + "</div>";} 
			else if (h > i) d += '<div class="cell disable">' + l++ + "</div>";
			else {
				if(cal_data){
				d += `<div class="cell${(r == h && this.CurrentMonth == n && this.CurrentYear == a ? " active" : "")}" onclick="get_note_by_date('${h}-${month}-${year}')"><span>` + h + "</span>"; if(date_list.includes(h+"-"+month+"-"+year)){
                    if(cal_data.hasOwnProperty(h+"-"+month+"-"+year))
                    {
                    	for (var z = 0; z < cal_data[h+"-"+month+"-"+year].length; z++) {
                     	d +=`<div class="notations_color${z+1}" style="background-color: `;
                     	
                     	if (cal_data[h+"-"+month+"-"+year][z] == 2) 
                     	{
                     		d +=`#f4688c`;
                     	}
                     	else if(cal_data[h+"-"+month+"-"+year][z] == 3)
                     	{
                     		d +=`#0fc3ff`;
                     	}
                     	else if(cal_data[h+"-"+month+"-"+year][z] == 4)
                     	{
                     		d +=`#41c191`;
                     	}
                     	else if(cal_data[h+"-"+month+"-"+year][z] == 5)
                     	{
                     		d +=`#f7a88d`;
                     	}
                     	d +=`;"></div>`;
                     } 
                    }
                    
				}

				}; l = 1;d +="</div>";
			}
			c % 7 == 6 && h >= i && (v = 10), c++
		}
		d += "</div>"
	}
	d += "</div>", document.querySelector('[data-render="month-year"]').innerHTML = s, document.querySelector(this.divId).innerHTML = d, document.querySelector(this.divId).setAttribute("data-date", this.Months[e] + " - " + t), document.querySelector(this.divId).setAttribute("data-month", e)
}; 
window.onload = new_Calendar();

function new_Calendar() {
	// 
	var t = new Calendar({
		RenderID: ".render-a",
		Format: "M"
	});
	t.showCurrent(), t.checkActive();
	var e = document.querySelectorAll(".header [data-action]");
	// console.log(e[0]);
	for (i = 0; i < e.length; i++) e[i].onclick = function () {
		if (document.querySelector(".calendar .header").setAttribute("class", "header"), "true" == document.querySelector(".months").getAttribute("data-loading")) return document.querySelector(".calendar .header").setAttribute("class", "header active"), !1;
		var e;
		document.querySelector(".months").setAttribute("data-loading", "true"), this.getAttribute("data-action").includes("prev") ? (t.prevMonth(), e = "left") : (t.nextMonth(), e = "right"), t.checkActive(), document.querySelector(".months").setAttribute("data-flow", e), document.querySelector('.month[data-active="true"]').addEventListener("webkitTransitionEnd", function () {
			document.querySelector(".months").removeAttribute("data-loading")
		}), document.querySelector('.month[data-active="true"]').addEventListener("transitionend", function () {
			document.querySelector(".months").removeAttribute("data-loading")
		})
	}
};