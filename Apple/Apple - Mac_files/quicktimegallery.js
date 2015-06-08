var qtGalleryDelegate={willShow:function(b,c,a){if(c){c.triggers();c._triggers.each(function(d){var f=d.up("li");
if(f){f.removeClassName("active")}var e=d.down("em");if(e){e.remove()}})}if(a){a.triggers();
a._triggers.each(function(d){var e=d.up("li");if(e){e.addClassName("active")}d.insert({top:"<em>Now playing…</em>"})
})}},didShow:function(a){a.currentSection.triggers();a.currentSection._triggers.each(function(b){if(!b.down("b")){a.delegate.willShow(a,null,a.currentSection)
}});a.delegate.didShow=null}};Event.onDOMReady(function(){var e=$$(".qtcontent");
var d=$("clicktoplay");var c=d.down("a");c.href=c.href.replace(/.*#/,"#");var a=$$("a.qtlink");
a.each(function(j,g){if(g!=a.length-1){var k=j.cloneNode(true);k.addClassName("movieLink");
var h=e[g];if(h){h.appendChild(k);j.href="#"+h.id;h.remove()}}});var f=new AC.ViewMaster.Viewer(e,"qtview","qtlink",{initialId:"clicktoplay",silentTriggers:true,shouldAnimateContentChange:false});
f.setDelegate(qtGalleryDelegate);f.show(f.currentSection);var b=new AC.ViewMaster.Tracker("click")
});
