member_fun([
{
"name": "Xiao-Jun Hong",
"title":"CEO",
"email":"XiaoJun@codelight.tw",
"fb_id":"1604484069"
},
{
"name": "Yong-Siang Jheng",
"title":"COO / Product Marketing",
"email":"Cola@codelight.tw",
"fb_id":"100002372511944"
},
{
"name": "Yuan-Fu Yang",
"title":"CFO / Junior Engineer",
"email":"YuanFu@codelight.tw",
"fb_id":"100000536264022"
},
{
"name": "Guan-Lin Li",
"title":"Marketing / Junior Engineer",
"email":"GuanLin@codelight.tw",
"fb_id":"100006477573975"
},
{
"name": "Wei-Zhi Chen",
"title":"Junior Engineer",
"email":"WilliamDP@codelight.tw",
"fb_id":"100002825899272"
},
{
"name": "Zhao-Jun Zhong",
"title":"Junior Engineer",
"email":"Zodic@codelight.tw",
"fb_id":"100004393657688"
},
{
"name": "Bo-Hao Li",
"title":"Intern",
"email":"Brian@codelight.tw",
"fb_id":"100003281811263"
},
]);

function member_fun(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += "<div class='col-md-3 col-sm-3'>" + '<div class="team-member">' +
                   '<img src ="https://graph.facebook.com/' + arr[i].fb_id +
            	   '/picture?width=300&height=300" width="150" height="150">' +
         		   '<h4>' + arr[i].name + '</h4>'+
            	   '<p class="text-muted">' + arr[i].title + '</p>' +
            	   '<ul class="list-inline social-buttons">' + '<li>' +
            	   '<a href="mailto:'+ arr[i].email +'">'  + '<i class="fa fa-envelope">' + '</i>' + '</a>' + '</li>' + '</ul>' + '</div>'+ '</div>';
        }
        out += "</div>";
        document.getElementById("member").innerHTML = out;
}