var $ = function(str) { return document.getElementById(str); };

var Doc = function() {

};

Doc.prototype = {
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        var li = $('nav').children;

        for (var i in li) {
            this.selectMod(li[i], li);
        }
    },
    selectMod: function(el, elParent) {
        el.onclick = function() {
            for(var j in elParent) {
                if(elParent[j].classList !== undefined) {
                    if(elParent[j] == this) {
                        this.classList.add('nav-selected');
                    } else {
                        elParent[j].classList.remove('nav-selected');
                    }
                }
            }

            return true;
        };
    }
};

var doc = new Doc();
doc.init();