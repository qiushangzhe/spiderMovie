var arrLink = document.links,
    thunderLen = arrLink.length,
    thunderSufix = ".asf;.avi;.iso;.mp3;.mpeg;.mpg;.mpga;.ra;.rar;.rm;.rmvb;.tar;.wma;.wmp;.wmv;.zip;.swf;.rmvb;.mp4;.3gp;.pdf;.mov;.wav;.scm;.mkv;.exe;.7z;.sub;.idx;.srt;.nfo;.bin;.aac;",
    arrSufix = thunderSufix.split(";"),
    isIE;
if ("undefined" == typeof GetUserBrowser) {
    var thunderBroserName = navigator.userAgent.toLowerCase();
    isIE = (/msie/i.test(thunderBroserName) || /trident/i.test(thunderBroserName)) && !/opera/.test(thunderBroserName)
} else isIE = "IE" == GetUserBrowser();
"undefined" == typeof thunderHrefAttr && (thunderHrefAttr = "thunderHref");
for (var i = 0; thunderLen > i; i++) {
    arrLink[0].href.lastIndexOf(".")
    var temp = arrLink[i].href,
        post = temp.lastIndexOf("."),
        p = temp.substring(post, temp.length).toLowerCase(),
        k = arrSufix.length,
        flag = !1,
        thunder_url = arrLink[i].href,
        protocol = arrLink[i].protocol,
        pathname = arrLink[i].pathname,
        path = pathname.substring(pathname.lastIndexOf("/"), pathname.length);
    null == thunderPath && (thunderPath = ""), path == thunderPath && "" != thunderPath && (flag = !0);
    for (var k = 0; k < arrSufix.length; k++)
        if (p == arrSufix[k]) {
            flag = !0;
            break
        }
    if ("http:" != protocol & "ftp:" != protocol & "mms:" != protocol & "rtsp:" != protocol && (flag = !1), flag)
        if (isIE) try {
            var s = document.createElement("anchor");
            s.innerHTML += "<a target='_self' href='#' " + thunderHrefAttr + "='" + ThunderEncode(thunder_url) + "' thunderPid='" + thunderPid + "' thunderType='' thunderResTitle='" + arrLink[i].innerHTML + "' onClick='return OnDownloadClick_Simple(this,2)' oncontextmenu='ThunderNetwork_SetHref(this)'>" + arrLink[i].innerHTML + "</a>", arrLink[i].replaceNode(s)
        } catch (e) {
            arrLink[i].setAttribute("target", "_self"), arrLink[i].setAttribute("href", "#"), arrLink[i].setAttribute("thunderPid", thunderPid), arrLink[i].setAttribute("thunderType", ""), arrLink[i].setAttribute("thunderResTitle", arrLink[i].innerHTML), arrLink[i].setAttribute("onclick", "return OnDownloadClick_Simple(this,2);"), arrLink[i].setAttribute("oncontextmenu", "ThunderNetwork_SetHref(this)"), arrLink[i].setAttribute(thunderHrefAttr, ThunderEncode(thunder_url))
        } else arrLink[i].setAttribute("target", "_self"), arrLink[i].setAttribute("href", "#"), arrLink[i].setAttribute("thunderPid", thunderPid), arrLink[i].setAttribute("thunderType", ""), arrLink[i].setAttribute("thunderResTitle", arrLink[i].innerHTML), arrLink[i].setAttribute("onclick", "return OnDownloadClick_Simple(this,2);"), arrLink[i].setAttribute("oncontextmenu", "ThunderNetwork_SetHref(this)"), arrLink[i].setAttribute(thunderHrefAttr, ThunderEncode(thunder_url))
}
