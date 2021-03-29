---
title: js-event
date: 2019-07-14 19:40:00
tags:
---
## JSĺŽç°Eventĺč˝
ĺvueäťŁç ĺĺ¤äş ĺŻšäşäťśčżç§ä¸čĽżäšćä¸ĺŽäşč§Łäş 
ććčŻçĺŽç°ä¸ĺĽevent éĄşäžżč°˘č°˘classďźĺ¤Şäšć˛Ąç¨é˝ĺżčŽ°ćäšĺäşďź

### čŽžčŽĄ
čŽžčŽĄäšĺĺččć´é˛çapi
```javascript
    // éčżonçĺŹäşäťś
    event.prototype.on = function(){}
    // éčżonceçĺŹĺšśĺŞč§Śĺä¸ćŹĄäşäťś
    event.prototype.once = function(){}
    // éčżremoveç§ťé¤äşäťś
    event.prototype.remove = function(){}
    // éčżemitč§Śĺäşäťś
    event.prototype.emit = function(){}
```
### ä˝żç¨
ĺé¨éčżĺŽäšä¸ä¸Şĺ­ćŽľäżĺ­äşäťśçéĺďźćŻćonĺ¤ä¸ŞäşäťśďźéčżemitćéĄşĺşč§Śĺéĺĺäź éĺć°
çŽĺĺŽç°äşä¸ä¸ č˛äźźäšč˝ç¨=ă= 
ĺŻč˝äšćäşćĺľć˛Ąččĺ§ ćŻĺŚćłç§ťé¤ćĺŽçcallback éčŻŻäź ĺçĺ¤ĺŽäšçąť
ććşäźĺĺĺ§đŹ

### ĺŽć´äťŁç 
```javascript
    class Event {
        constructor(){
            this.emitList = {};
            this.onceList = [];
        }

        on(name, fn) {
            this.setEvent.call(this,name, fn);
        }

        once(name, fn) {
            this.setEvent.call(this,name, fn);
            this.onceList.push(name)
        }

        remove(name) {
            delete this.emitList[name]
        }

        emit(name, params) {
            if (!this.emitList[name]) return console.log(`----- no ${name}-----`);


            this.emitList[name].forEach(item => item(params));

            if (this.onceList.findIndex(item => item === name) > -1) this.remove(name);
        }
    }
    
    function setEvent(name, fn) {
        const fnList = this.emitList[name];
        if (!fnList) {
            this.emitList[name] = [fn];
        }
        else {
            fnList.push(fn);
        }
    }
```