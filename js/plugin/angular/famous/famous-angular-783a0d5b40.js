"use strict";var ngFameApp=angular.module("famous.angular",[]);ngFameApp.provider("$famous",function(){var e={"famous/core/Context":famous.core.Context,"famous/core/ElementAllocator":famous.core.ElementAllocator,"famous/core/Engine":famous.core.Engine,"famous/core/Entity":famous.core.Entity,"famous/core/EventEmitter":famous.core.EventEmitter,"famous/core/EventHandler":famous.core.EventHandler,"famous/core/Group":famous.core.Group,"famous/core/Modifier":famous.core.Modifier,"famous/core/OptionsManager":famous.core.OptionsManager,"famous/core/RenderNode":famous.core.RenderNode,"famous/core/Scene":famous.core.Scene,"famous/core/SpecParser":famous.core.SpecParser,"famous/core/Surface":famous.core.Surface,"famous/core/Transform":famous.core.Transform,"famous/core/View":famous.core.View,"famous/core/ViewSequence":famous.core.ViewSequence,"famous/events/EventArbiter":famous.events.EventArbiter,"famous/events/EventFilter":famous.events.EventFilter,"famous/events/EventMapper":famous.events.EventMapper,"famous/inputs/FastClick":famous.inputs.FastClick,"famous/inputs/GenericSync":famous.inputs.GenericSync,"famous/inputs/MouseSync":famous.inputs.MouseSync,"famous/inputs/PinchSync":famous.inputs.PinchSync,"famous/inputs/RotateSync":famous.inputs.RotateSync,"famous/inputs/ScaleSync":famous.inputs.ScaleSync,"famous/inputs/ScrollSync":famous.inputs.ScrollSync,"famous/inputs/TouchSync":famous.inputs.TouchSync,"famous/inputs/TouchTracker":famous.inputs.TouchTracker,"famous/inputs/TwoFingerSync":famous.inputs.TwoFingerSync,"famous/math/Matrix":famous.math.Matrix,"famous/math/Quaternion":famous.math.Quaternion,"famous/math/Random":famous.math.Random,"famous/math/Utilities":famous.math.Utilities,"famous/math/Vector":famous.math.Vector,"famous/modifiers/Draggable":famous.modifiers.Draggable,"famous/modifiers/Fader":famous.modifiers.Fader,"famous/modifiers/ModifierChain":famous.modifiers.ModifierChain,"famous/modifiers/StateModifier":famous.modifiers.StateModifier,"famous/surfaces/CanvasSurface":famous.surfaces.CanvasSurface,"famous/surfaces/ContainerSurface":famous.surfaces.ContainerSurface,"famous/surfaces/FormContainerSurface":famous.surfaces.FormContainerSurface,"famous/surfaces/ImageSurface":famous.surfaces.ImageSurface,"famous/surfaces/InputSurface":famous.surfaces.InputSurface,"famous/surfaces/SubmitInputSurface":famous.surfaces.SubmitInputSurface,"famous/surfaces/TextareaSurface":famous.surfaces.TextareaSurface,"famous/surfaces/VideoSurface":famous.surfaces.VideoSurface,"famous/transitions/CachedMap":famous.transitions.CachedMap,"famous/transitions/Easing":famous.transitions.Easing,"famous/transitions/MultipleTransition":famous.transitions.MultipleTransition,"famous/transitions/SnapTransition":famous.transitions.SnapTransition,"famous/transitions/SpringTransition":famous.transitions.SpringTransition,"famous/transitions/Transitionable":famous.transitions.Transitionable,"famous/transitions/TransitionableTransform":famous.transitions.TransitionableTransform,"famous/transitions/TweenTransition":famous.transitions.TweenTransition,"famous/transitions/WallTransition":famous.transitions.WallTransition,"famous/utilities/KeyCodes":famous.utilities.KeyCodes,"famous/utilities/Timer":famous.utilities.Timer,"famous/utilities/Utility":famous.utilities.Utility,"famous/views/Deck":famous.views.Deck,"famous/views/EdgeSwapper":famous.views.EdgeSwapper,"famous/views/FlexibleLayout":famous.views.FlexibleLayout,"famous/views/Flipper":famous.views.Flipper,"famous/views/GridLayout":famous.views.GridLayout,"famous/views/HeaderFooterLayout":famous.views.HeaderFooterLayout,"famous/views/Lightbox":famous.views.Lightbox,"famous/views/RenderController":famous.views.RenderController,"famous/views/ScrollContainer":famous.views.ScrollContainer,"famous/views/Scroller":famous.views.Scroller,"famous/views/Scrollview":famous.views.Scrollview,"famous/views/SequentialLayout":famous.views.SequentialLayout,"famous/widgets/NavigationBar":famous.widgets.NavigationBar,"famous/widgets/Slider":famous.widgets.Slider,"famous/widgets/TabBar":famous.widgets.TabBar,"famous/widgets/ToggleButton":famous.widgets.ToggleButton,"famous/physics/PhysicsEngine":famous.physics.PhysicsEngine,"famous/physics/bodies/Body":famous.physics.bodies.Body,"famous/physics/bodies/Circle":famous.physics.bodies.Circle,"famous/physics/bodies/Particle":famous.physics.bodies.Particle,"famous/physics/bodies/Rectangle":famous.physics.bodies.Rectangle,"famous/physics/constraints/Collision":famous.physics.constraints.Collision,"famous/physics/constraints/Constraint":famous.physics.constraints.Constraint,"famous/physics/constraints/Curve":famous.physics.constraints.Curve,"famous/physics/constraints/Distance":famous.physics.constraints.Distance,"famous/physics/constraints/Snap":famous.physics.constraints.Snap,"famous/physics/constraints/Surface":famous.physics.constraints.Surface,"famous/physics/constraints/Wall":famous.physics.constraints.Wall,"famous/physics/constraints/Walls":famous.physics.constraints.Walls,"famous/physics/forces/Drag":famous.physics.forces.Drag,"famous/physics/forces/Force":famous.physics.forces.Force,"famous/physics/forces/Repulsion":famous.physics.forces.Repulsion,"famous/physics/forces/RotationalDrag":famous.physics.forces.RotationalDrag,"famous/physics/forces/RotationalSpring":famous.physics.forces.RotationalSpring,"famous/physics/forces/Spring":famous.physics.forces.Spring,"famous/physics/forces/VectorField":famous.physics.forces.VectorField,"famous/physics/integrators/SymplecticEuler":famous.physics.integrators.SymplecticEuler};this.registerModule=function(n,r){e[n]=r},e.getIsolate=function(e){return e&&"isolate"in e?e.isolate[e.$id]:{}},e.find=function(n){var r=angular.element(window.document.querySelectorAll(n)),a=function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=angular.element(e).scope()}),n}(r),o=function(n){var r=[];return angular.forEach(n,function(n,a){r[a]=e.getIsolate(n)}),r}(a);return o};var n=/([\:\-\_]+(.))/g,r=/^moz([A-Z])/,a=/^(x[\:\-_]|data[\:\-_])/i,o=/^FA\-.*SURFACE/,t=/^FA\-.*/;window.$famousUtil=e.util={isASurface:function(e){return o.test(e[0].tagName)},isFaElement:function(e){if(t.test(e[0].tagName))return!0;var n=!1;return angular.forEach(e[0].attributes,function(e){n=n||t.test(e)}),n},camelCase:function(e){return e.replace(n,function(e,n,r,a){return a?r.toUpperCase():r}).replace(r,"Moz$1")},directiveNormalize:function(n){return e.util.camelCase(n.replace(a,""))}},this.$get=function(){return e}}),angular.module("famous.angular").config(["$provide",function(e){e.decorator("$animate",["$delegate","$rootScope","$famous","$parse","$famousDecorator",function(e,n,r,a,o){var t=r["famous/utilities/Timer"],i="$$faAnimationActive",s={},u=function(e){var n=r.getIsolate(e);return!n&&e&&(n=o.$$getIsolateById(s[e.$id])),n},c={enabled:e.enabled};return angular.forEach(["addClass","removeClass"],function(n){var a=angular.element.prototype[n];angular.element.prototype[n]=function(e){return a.apply(this,arguments),r.util.isASurface(this)&&"string"==typeof e&&""!==e.trim()&&u(this.scope()).renderNode[n](e),this},c[n]=function(a,o,t){if(e[n](a,o,t),r.util.isFaElement(a)){var i=u(a.scope());if(r.util.isASurface(a)){var s=i.renderNode;angular.forEach(o.split(" "),function(e){"ng-hide"===e?"addClass"===n?i.hide():"removeClass"===n&&i.show():s[n](e)})}else angular.forEach(o.split(" "),function(e){"ng-hide"===e&&("addClass"===n?i.hide():"removeClass"===n&&i.show())})}}}),c.setClass=function(n,a,o,t){if(e.setClass(n,a,o,t),r.util.isASurface(n)){var i=u(n.scope()).renderNode;angular.forEach(a.split(" "),function(e){i.addClass(e)}),angular.forEach(o.split(" "),function(e){i.removeClass(e)})}},angular.forEach(["enter","leave","move"],function(a){var o=a[0].toUpperCase()+a.slice(1);c[a]=function(c,f,l){var d=this,m=arguments,p="enter"===a,v=c.scope();v&&v.$parent&&(s[v.$id]=v.$parent.$id);var g=u(v);p===!0&&e[a].apply(this,arguments),c.data(i)===!0&&g&&g.$$animateHaltHandler&&g.$$animateHaltHandler(c.scope()),c.data(i,!0);var h=function(){v&&v.$id;if("leave"===a&&r.util.isFaElement(c)){var n=u(v);n&&n.id&&n.hide()}c.data(i)!==!1&&(c.data(i,!1),p===!1&&e[a].apply(d,m))};n.$$postDigest(function(){var e,n=c.scope(),r=u(n);if(r&&(e=r["$$animate"+o+"Handler"]),void 0===e)return void h();var a=e(n,{$done:h});"number"==typeof a&&t.setTimeout(h,a)})}}),c}])}]),angular.module("famous.angular").factory("$famousDecorator",["$famous",function(e){var n={child:{},parent:{},renderable:function(n){var r=e["famous/core/RenderNode"];n.renderGate=new r,n.emptyNode=new r,n.show=function(){n.renderGate&&n.renderGate.set(n.renderNode)},n.hide=function(){n.renderGate.set(n.emptyNode)}}},r={};return{addRole:function(e,r){n[e](r)},ensureIsolate:function(e,n){if(n){var a=["fa-edge-swapper","fa-render-controller","fa-deck","fa-light-box"],o=!1;angular.forEach(a,function(e){return e.toUpperCase()===n[0].tagName?void(o=!0):void 0!==n[0].attributes[e]?void(o=!0):void 0}),o&&(e=e.$parent)}e.isolate=e.isolate||{},e.isolate[e.$id]=e.isolate[e.$id]||{};var t=e.isolate[e.$id];t.id=e.$id;var i=e.$eval("$index");return i&&"$index"!==i&&!t.index&&(t.index=i),r[t.id]=t,t},$$getIsolateById:function(e){return r[e]},registerChild:function(e,n,r,a){e.$emit("registerChild",r),n.one("$destroy",function(){"removeMethod"in r&&r.removeMethod(r.id),r&&r.hide&&r.hide(),a&&a()})},sequenceWith:function(n,r,a,o){n.$on("registerChild",function(t,i){if(t.targetScope.$id!==n.$id){var s=e.getIsolate(n);i.$parent=s,s.$children=s.$children||[],s.$children.push(i),r(i),t.stopPropagation(),a&&(i.removeMethod=a),o&&(i.updateMethod=o)}})}}}]),angular.module("famous.angular").service("$famousPipe",function(){function e(e,n,r){e instanceof Array||(e=[e]),n instanceof Array||(n=[n]);for(var a=0;a<e.length;a++)for(var o=0;o<n.length;o++)void 0!==n[o]&&void 0!==e[a]&&n[o][r](e[a])}this.unpipesFromTargets=function(n,r){e(n,r,"unpipe")},this.pipesToTargets=function(n,r){e(n,r,"pipe")}}),angular.module("famous.angular").factory("$timeline",function(){var e=function(e,n){return"number"==typeof e?e+n:e.map(function(e,r){return e+n[r]})},n=function(e,n){return"number"==typeof e?e-n:e.map(function(e,r){return e-n[r]})},r=function(e,n){return"number"==typeof e?e*n:e.map(function(e){return e*n})},a=function(a,o,t,i,s){return function(u){var c=i,f=-o,l=1/(t-o),d=n(s,i);return e(r(d,a(l*(u+f))),c)}};return function(e){var n=function(e){return e};return function(r){if(r<e[0][0])return e[0][1];for(var o=0;o<e.length-1;o++)if(e[o][0]<=r&&r<e[o+1][0]){var t=a(e[o][2]||n,e[o][0],e[o+1][0],e[o][1],e[o+1][1]);return t(r)}return e[e.length-1][1]}}}),angular.module("famous.angular").directive("faAnimateEnter",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateEnterHandler=e(o.faAnimateEnter),o.$observe("faAnimateEnter",function(){t.$$animateEnterHandler=e(o.faAnimateEnter)})}}}}}]),angular.module("famous.angular").directive("faAnimateHalt",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateHaltHandler=e(o.faAnimateHalt),o.$observe("faAnimateHalt",function(){t.$$animateHaltHandler=e(o.faAnimateHalt)})}}}}}]),angular.module("famous.angular").directive("faAnimateLeave",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateLeaveHandler=e(o.faAnimateLeave),o.$observe("faAnimateLeave",function(){t.$$animateLeaveHandler=e(o.faAnimateLeave)})}}}}}]),angular.module("famous.angular").directive("faAnimateMove",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateMoveHandler=e(o.faAnimateMove),o.$observe("faAnimateMove",function(){t.$$animateMoveHandler=e(o.faAnimateMove)})}}}}}]),angular.module("famous.angular").directive("faAnimation",["$famous","$famousDecorator",function(e,n){return{restrict:"EA",scope:!0,compile:function(r,a,o){var t=e["famous/core/Transform"],i=e["famous/transitions/Transitionable"],s=e["famous/transitions/Easing"];return{pre:function(e,r,a){n.ensureIsolate(e)},post:function(e,r,a){var o=n.ensureIsolate(e);setTimeout(function(){o.timeline=e.$eval(a.timeline),o._trans=new i(0),o.play=function(n){var r={duration:e.$eval(a.duration),curve:e.$eval(a.curve)||"linear"};o._trans.set(1,r,function(){n&&n(),a.loop&&setTimeout(function(){o.replay(n)},0)})},o.reset=function(){o._trans.set(0)},o.replay=function(e){o.reset(),o.play(e)};var n=null;a.event&&(n&&n(),n=e.$on(a.event,function(e,n){var r=n&&n.callback?n.callback:void 0;o.replay(r)}));a.id;if(void 0===o.timeline&&(o.timeline=o._trans.get.bind(o._trans),a.autoplay&&o.play()),!o.timeline instanceof Function)throw new Error("timeline must be a reference to a function or duration must be provided");for(var u=r[0].querySelectorAll("animate"),c={},f=0;f<u.length;f++)!function(){var n=u[f];if(n.attributes.targetmodselector){var a=angular.element(r[0].parentNode)[0].querySelectorAll(n.attributes.targetmodselector.value);angular.forEach(a,function(r){var a=angular.element(r).scope(),i=a.isolate[a.$id].modifier,u=a.isolate[a.$id].getTransform,f=n.attributes.curve&&"linear"!==n.attributes.curve.value?s[n.attributes.curve.value]:function(e){return e};if(n.attributes.field){var l=n.attributes.field.value,d=n.attributes.timelinelowerbound?parseFloat(n.attributes.timelinelowerbound.value):0,m=n.attributes.timelineupperbound?parseFloat(n.attributes.timelineupperbound.value):1;if(!n.attributes.startvalue)throw new Error("you must provide a start value for the animation");var p=e.$eval(n.attributes.startvalue.value);if(!n.attributes.endvalue)throw new Error("you must provide an end value for the animation");var v=e.$eval(n.attributes.endValue.value),g=c[a.$id]=c[a.$id]||{},h=g[l]=g[l]||[];h.push({field:l,lowerBound:d,upperBound:m,startValue:p,endValue:v,curve:f}),h.sort(function(e,n){return e.lowerBound-n.lowerBound});for(var $=1;$<h.length;$++)for(var y=h[$].lowerBound,w=0;w<$;w++)if(y<h[w].upperBound)throw new Error("Animate segments have overlappingdomains for the same field ("+l+").At any point in the timeline, only one <animate>can affect a given field on the same modifier.");var S=function(){for(var e=o.timeline()||0,n=0,r=h[n],a=0;a<h.length;a++){if(e>=h[a].lowerBound&&e<=h[a].upperBound){r=h[a];break}if(a===h.length-1){r=h[a];break}if(e>=h[a].upperBound&&e<h[a+1].lowerBound){r=h[a];break}}if(e<=r.lowerBound)return r.startValue;if(e>=r.upperBound)return r.endValue;var t=r.upperBound-r.lowerBound,i=(e-r.lowerBound)/t;if(Array.isArray(r.startValue)){for(var s=[],u=0;u<r.startValue.length;u++)s.push(r.startValue[u]+r.curve(i)*(r.endValue[u]-r.startValue[u]));return s}return r.startValue+r.curve(i)*(r.endValue-r.startValue)},b=g.transformComponents=g.transformComponents||[];"opacity"===l?i.opacityFrom(function(){return S()}):"origin"===l?i.originFrom(function(){return S()}):"size"===l?i.sizeFrom(function(){return S()}):(b.push({field:l,fn:S}),i.transformFrom(function(){for(var e={},n=u&&u()?[u()]:[],r=0;r<b.length;r++)!function(){var a=b[r].field;if(!e[a]){var o=b[r].fn();Array.isArray(o)?n.push(t[a].apply(this,o)):n.push(t[a](o)),e[a]=!0}}();return 1===n.length?n[0]:t.multiply.apply(this,n)}))}})}}()},1)}}}}}]),angular.module("famous.angular").directive("faApp",["$famous","$famousDecorator",function(e,n){return{template:'<div style="display: none;"><div></div></div>',transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){function t(){s.apply(this,arguments)}var i=n.ensureIsolate(r),s=e["famous/core/View"],u=e["famous/core/Engine"];e["famous/core/Transform"];a.append('<div class="famous-angular-clipping-container"><div class="famous-angular-container"></div></div>'),i.context=u.createContext(a[0].querySelector(".famous-angular-container")),window.context=i.context;var c=function(){var e=parseInt(o.faPerspective);e&&i.context.setPerspective(e)};o.$observe("faPerspective",c),c(),t.prototype=Object.create(s.prototype),t.prototype.constructor=t;i.view=new t,i.context.add(i.view),r.$on("$destroy",function(){i.context.update=angular.noop}),r.$on("registerChild",function(e,n){i.view.add(n.renderNode),e.stopPropagation()})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){angular.element(r[0].querySelectorAll("div div")[0]).append(e)}),t.readyToRender=!0}}}}}]),angular.module("famous.angular").directive("faCanvasSurface",["$famous","$famousDecorator","$interpolate","$controller","$compile",function(e,n,r,a,o){return{scope:!0,transclude:!0,template:'<canvas class="fa-canvas-surface"></canvas>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/CanvasSurface"];e["famous/core/Transform"],e["famous/core/EventHandler"];t.renderNode=new i({size:r.$eval(o.faSize)}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o.class.split(" ")),n.sequenceWith(r,function(e){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r,a){var t=n.ensureIsolate(e),i=function(){t.renderNode.setContent(r[0].querySelector("canvas.fa-canvas-surface"))};i(),o(e,function(e){angular.element(r[0].querySelectorAll("canvas.fa-canvas-surface")).append(e)}),n.registerChild(e,r,t,function(){})}}}}}]),angular.module("famous.angular").directive("faClick",["$parse","$famousDecorator",function(e,n){return{restrict:"A",compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faClick){var i=t.renderNode._eventInput||t.renderNode;i.on("click",function(n){var a=e(o.faClick);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faContainerSurface",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/ContainerSurface"],s=r.$eval(o.faOptions)||{};t.renderNode=new i(s),n.addRole("renderable",t),t.show(),n.sequenceWith(r,function(e){t.renderNode.add(e.renderGate)})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]),angular.module("famous.angular").directive("faDraggable",["$famous","$famousDecorator","$parse","$rootScope",function(e,n,r,a){return{template:"<div></div>",transclude:!0,restrict:"EA",priority:2,scope:!0,compile:function(r,o,t){return{post:function(r,o,i){var s=n.ensureIsolate(r),u=e["famous/core/RenderNode"],c=e["famous/modifiers/Draggable"],f=r.$eval(i.faOptions)||{};r.$watch(function(){return r.$eval(i.faOptions)},function(e,n){e=e||{},s.modifier.setOptions(e)},!0),s.modifier=new c(f),s.renderNode=(new u).add(s.modifier),n.addRole("renderable",s),s.show(),n.sequenceWith(r,function(e){s.renderNode.add(e.renderGate)}),t(r,function(e){o.find("div").append(e)}),n.registerChild(r,o,s,function(){s.modifier.deactivate()}),r.$$phase||a.$$phase||r.$apply()}}}}}]),angular.module("famous.angular").directive("faEdgeSwapper",["$famous","$famousDecorator",function(e,n){return{scope:!0,restrict:"A",priority:512,compile:function(r,a,o){var t=e["famous/views/EdgeSwapper"];return{pre:function(e,r,a){var o,i=n.ensureIsolate(e);i.$$animateEnterHandler=function(e,n){i.renderNode.show(o,function(){i.$$leaveDoneCallback&&i.$$leaveDoneCallback(),n.$done()})},i.$$animateLeaveHandler=function(e,n){i.$$leaveDoneCallback=n.$done};var s=e.$eval(a.faOptions);i.renderNode=new t(s),n.addRole("renderable",i),i.show(),n.sequenceWith(e,function(e){o=e.renderGate})},post:function(e,r,a){var o=n.ensureIsolate(e);n.registerChild(e,r,o)}}}}}]),angular.module("famous.angular").directive("faFlexibleLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/FlexibleLayout"],s=(e["famous/core/ViewSequence"],e["famous/core/RenderNode"],[]),u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),e.$emit("registerChild",t)}}}}}]),angular.module("famous.angular").directive("faFlipper",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/Flipper"],s=r.$eval(o.faOptions)||{};t.renderNode=new i(s),n.addRole("renderable",t),t.show(),t.children=[],t.flip=function(e){t.renderNode.flip(e||r.$eval(o.faOptions))},n.sequenceWith(r,function(e){var n=t.children.length;if(0===n)t.renderNode.setFront(e.renderGate);else{if(1!==n)throw new Error("fa-flipper accepts only two child elements; more than two have been provided");t.renderNode.setBack(e.renderGate)}t.children.push(e.renderGate)},function(e){t.children.splice(t.children.length-1,1)})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]),angular.module("famous.angular").directive("faGridLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/GridLayout"],s=(e["famous/core/ViewSequence"],[]),u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){r.$$postDigest(function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))})};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()},c)},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]),angular.module("famous.angular").directive("faHeaderFooterLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){var t=e["famous/views/HeaderFooterLayout"],i=e["famous/core/RenderNode"];return{pre:function(e,r,a){var o=n.ensureIsolate(e),s=(new i,new i,new i,e.$eval(a.faOptions)||{});o.renderNode=new t(s),n.addRole("renderable",o),o.show();var u=0;n.sequenceWith(e,function(e){if(u++,1===u)o.renderNode.header.add(e.renderGate);else if(2===u)o.renderNode.content.add(e.renderGate);else{if(3!==u)throw new Error("fa-header-footer-layout can accept no more than 3 children");o.renderNode.footer.add(e.renderGate)}},function(e){1===u?o.renderNode.header.set({}):2===u?o.renderNode.content.set({}):3===u&&o.renderNode.footer.set({}),u--})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]),angular.module("famous.angular").directive("faImageSurface",["$famous","$famousDecorator",function(e,n){return{scope:!0,template:'<div class="fa-image-surface"></div>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/ImageSurface"];e["famous/core/Transform"],e["famous/core/EventHandler"];r.$watch(function(){return t.getProperties()},function(){t.renderNode&&t.renderNode.setProperties(t.getProperties())},!0);var s=function(e){return"fa"+e.charAt(0).toUpperCase()+e.slice(1)};t.getProperties=function(){for(var e=r.$eval(o.faProperties)||{},n=["backgroundColor","color"],a=0;a<n.length;a++){var t=n[a],i=s(t);o[i]&&(e[t]=r.$eval(o[i]))}return e},t.renderNode=new i({size:r.$eval(o.faSize),class:r.$eval(o.class),properties:t.getProperties()}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o.class.split(" "))},post:function(e,r,a){var o=n.ensureIsolate(e),t=function(){o.renderNode.setContent(a.faImageUrl)};t(),a.$observe("faImageUrl",t),n.registerChild(e,r,o)}}}}}]),angular.module("famous.angular").directive("faIndex",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(e,r,a){var o=n.ensureIsolate(e,r);o.index=e.$eval(a.faIndex),e.$watch(function(){return e.$eval(a.faIndex)},function(){o.index=e.$eval(a.faIndex),o.updateMethod&&o.updateMethod()})}}}}}]),angular.module("famous.angular").config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate","$famousDecorator","$parse","$rootElement","$famous","$timeout",function(e,n,r,a,o,t){function i(e,n,r,a){return Math.abs(e-r)<$&&Math.abs(n-a)<$}function s(e,n,r){for(var a=0;a<e.length;a+=2)if(i(e[a],e[a+1],n,r))return e.splice(a,a+2),!0;return!1}function u(e){if(!(Date.now()-l>h)){var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].clientX,a=n[0].clientY;s(d,r,a)||(e.stopPropagation(),e.preventDefault(),e.target&&e.target.blur())}}function c(e){var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].clientX,a=n[0].clientY;d.push(r,a),t(function(){for(var e=0;e<d.length;e+=2)if(d[e]===r&&d[e+1]===a)return void d.splice(e,e+2)},h,!1)}function f(e,n){d||(a[0].addEventListener("click",u,!0),a[0].addEventListener("touchstart",c,!0),d=[]),l=Date.now(),s(d,e,n)}var l,d,m=e[0],p=m.compile,v=750,g=12,h=2500,$=25,y="ng-click-active";o["famous/core/Engine"];return m.compile=function(e,n,a){return o.util.isFaElement(e)?o.util.isASurface(e)?{post:function(e,n,a){function t(){d=!1,p.removeClass(y)}var i,s,u,c,l=r(a.ngClick),d=!1,m=o.getIsolate(e),p=m.renderNode;p.on("touchstart",function(e){d=!0,i=e.target?e.target:e.srcElement,3===i.nodeType&&(i=i.parentNode),p.addClass(y),s=Date.now();var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].originalEvent||n[0];u=r.clientX,c=r.clientY}),p.on("touchmove",function(e){t()}),p.on("touchcancel",function(e){t()}),p.on("touchend",function(e){var n=Date.now()-s,r=e.changedTouches&&e.changedTouches.length?e.changedTouches:e.touches&&e.touches.length?e.touches:[e],o=r[0].originalEvent||r[0],i=o.clientX,l=o.clientY,m=Math.sqrt(Math.pow(i-u,2)+Math.pow(l-c,2));d&&n<v&&m<g&&(f(i,l),angular.isDefined(a.disabled)&&"false"!==a.disabled||p.emit("click",[e])),t()}),p.on("click",function(n,r){e.$apply(function(){l(e,{$event:r||n})})}),p.on("mousedown",function(e){p.addClass(y)}),p.on("mousemove mouseup",function(e){p.removeClass(y)})}}:void 0:p(e,n,a)},e}]),angular.forEach("dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(n){var r=window.$famousUtil.directiveNormalize("ng-"+n);e.decorator(r+"Directive",["$delegate","$famousDecorator","$parse","$famous",function(e,a,o,t){var i=e[0],s=i.compile;return i.compile=function(e,i,u){return t.util.isFaElement(e)?{post:function(e,t,i){var s=a.ensureIsolate(e);if(i[r]){var u=s.renderNode._eventInput||s.renderNode;u.on(n,function(n){var a=o(i[r]);a(e,{$event:n}),e.$$phase||e.$apply()})}}}:s(e,i,u)},e}])})}]),angular.module("famous.angular").directive("faModifier",["$famous","$famousDecorator","$parse","$rootScope",function(e,n,r,a){return{template:"<div></div>",transclude:!0,restrict:"EA",priority:2,scope:!0,compile:function(o,t,i){return{post:function(o,t,s){var u=n.ensureIsolate(o),c=e["famous/core/RenderNode"],f=e["famous/core/Modifier"],l=e["famous/core/Transform"],d=e["famous/physics/bodies/Particle"],m=function(e){return e.getPosition()},p=["aboutOrigin","perspective","rotate","rotateAxis","rotateX","rotateY","rotateZ","scale","skew","translate"];s.$observe("faTransformOrder",function(){var e=o.$eval(s.faTransformOrder);void 0!==e&&(p=e)});var v={};angular.forEach(p,function(n){var a=e.util.directiveNormalize("fa-"+n);s.$observe(a,function(){v[n]=r(s[a])})});var g=angular.noop;s.$observe("faTransform",function(){g=r(s.faTransform)}),u.getTransform=function(){var e=g(o);if(void 0!==e)return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e;var n=[];return angular.forEach(p,function(e){var r=v[e]?v[e](o):void 0;void 0!==r&&(r instanceof Function&&(r=r()),r instanceof Array?n.push(l[e].apply(this,r)):r instanceof d?n.push(l[e].apply(this,m(r))):n.push(l[e].call(this,r)))}),n.length?1===n.length?n[0]:l.multiply.apply(this,n):void 0};var h=angular.noop;s.$observe("faAlign",function(){h=r(s.faAlign)}),u.getAlign=function(){var e=h(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var $=angular.noop;s.$observe("faOpacity",function(){$=r(s.faOpacity)}),u.getOpacity=function(){var e=$(o);return void 0===e?1:e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var y=angular.noop;s.$observe("faSize",function(){y=r(s.faSize)}),u.getSize=function(){var e=y(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var w=angular.noop;s.$observe("faOrigin",function(){w=r(s.faOrigin)}),u.getOrigin=function(){var e=w(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e},u.modifier=new f({transform:u.getTransform,size:u.getSize,opacity:u.getOpacity,origin:u.getOrigin,align:u.getAlign}),u.renderNode=(new c).add(u.modifier),n.addRole("renderable",u),u.show(),n.sequenceWith(o,function(e){u.renderNode.add(e.renderGate)}),i(o,function(e){t.find("div").append(e)}),n.registerChild(o,t,u,function(){u.modifier.setOpacity(0)}),o.$$phase||a.$$phase||o.$apply()}}}}}]),angular.module("famous.angular").directive("faMouseover",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faMouseover){var i=t.renderNode._eventInput||t.renderNode;i.on("mouseover",function(n){var a=e(o.faMouseover);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faOptions",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:-16,compile:function(){return{post:function(e,r,a){var o=n.ensureIsolate(e,r);e.$watch(function(){return e.$eval(a.faOptions)},function(){o.renderNode.setOptions(e.$eval(a.faOptions))},!0)}}}}}]),angular.module("famous.angular").directive("faPipeFrom",["$famous","$famousDecorator","$famousPipe",function(e,n,r){return{restrict:"A",scope:!1,priority:16,compile:function(){var a=e["famous/core/Engine"];return{post:function(e,o,t){var i=n.ensureIsolate(e);e.$watch(function(){return e.$eval(t.faPipeFrom)},function(e,n){var o;o=i.renderNode&&i.renderNode._isModifier?i.renderNode._object:i.renderNode?i.renderNode._eventInput||i.renderNode:a,r.unpipesFromTargets(o,n),r.pipesToTargets(o,e)}),e.$on("$destroy",function(){r.unpipesFromTargets(i.renderNode||a,e.$eval(t.faPipeFrom))})}}}}}]),angular.module("famous.angular").directive("faPipeTo",["$famous","$famousDecorator","$famousPipe",function(e,n,r){return{restrict:"A",scope:!1,priority:16,compile:function(){var a=e["famous/core/Engine"];return{post:function(e,o,t){var i=n.ensureIsolate(e);e.$watch(function(){return e.$eval(t.faPipeTo)},function(e,n){var o;o=i.renderNode&&i.renderNode._isModifier?i.renderNode._object:i.renderNode?i.renderNode._eventOutput||i.renderNode:a,r.unpipesFromTargets(n,o),r.pipesToTargets(e,o)}),e.$on("$destroy",function(){r.unpipesFromTargets(e.$eval(t.faPipeTo),i.renderNode||a)})}}}}}]),angular.module("famous.angular").directive("faRenderNode",["$famous","$famousDecorator",function(e,n){
return{template:"<div></div>",transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/core/Engine"];e["famous/core/RenderNode"];t.children=[],o.$observe("faPipeTo",function(e){var n=r.$eval(e);n&&i.pipe(n)}),t.renderNode=r.$eval(o.faNode),n.addRole("renderable",t),t.show(),n.sequenceWith(r,function(e){t.renderNode.add(e.renderGate),t.children.push(e)})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]),angular.module("famous.angular").directive("faScrollView",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/Scrollview"],s=e["famous/core/ViewSequence"],u=(e["famous/core/Surface"],[]),c=r.$eval(o.faOptions)||{};t.renderNode=new i(c),n.addRole("renderable",t),t.show();var f=function(e){r.$$postDigest(function(){u.sort(function(e,n){return e.index-n.index});var n={array:function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(u)};e&&(n.index=r.$eval(o.faStartIndex));var a=new s(n);t.renderNode.sequenceFrom(a)})};n.sequenceWith(r,function(e){u.push(e),f(!0)},function(e){u=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(u),f()},f)},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]),angular.module("famous.angular").directive("faSequentialLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return window.$f=e,{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/SequentialLayout"],s=[],u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]),angular.module("famous.angular").directive("faSurface",["$famous","$famousDecorator","$interpolate","$controller","$compile",function(e,n,r,a,o){return{scope:!0,transclude:!0,template:'<div class="fa-surface"></div>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/core/Surface"];e["famous/core/Transform"],e["famous/core/EventHandler"];r.$watch(function(){return t.getProperties()},function(){t.renderNode&&t.renderNode.setProperties(t.getProperties())},!0);var s=function(e){return"fa"+e.charAt(0).toUpperCase()+e.slice(1)};t.getProperties=function(){for(var e=r.$eval(o.faProperties)||{},n=["backgroundColor","margin","padding","color","pointerEvents","zIndex"],a=0;a<n.length;a++){var t=n[a],i=s(t);o[i]&&(e[t]=r.$eval(o[i]))}return e};var u=[];o.$observe("faSize",function(){t.renderNode.setSize(r.$eval(o.faSize)),u.push(new Date),u.length>5&&(u[4]-u[0]<=1e3&&console.warn("Using fa-size on fa-surface to animate is significantly non-performant, prefer to use fa-size on an fa-modifier surrounding a fa-surface"),u.shift())}),t.renderNode=new i({size:r.$eval(o.faSize),properties:t.getProperties()}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o.class.split(" ")),n.sequenceWith(r,function(e){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r,a){var t=n.ensureIsolate(e),i=function(){t.renderNode.setContent(r[0].querySelector("div.fa-surface"))};i(),o(e,function(e){angular.element(r[0].querySelectorAll("div.fa-surface")).append(e)}),n.registerChild(e,r,t,function(){})}}}}}]),angular.module("famous.angular").directive("faTap",["$parse","$famousDecorator",function(e,n){return{restrict:"A",compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTap){var i=t.renderNode._eventInput||t.renderNode,s=!1;i.on("touchmove",function(e){return s=!0,e}),i.on("tap",function(n){if(!s){var a=e(o.faTap);a(r,{$event:n}),r.$$phase||r.$apply()}s=!1})}}}}}}]),angular.module("famous.angular").directive("faTouchend",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchend){var i=t.renderNode._eventInput||t.renderNode;i.on("touchend",function(n){var a=e(o.faTouchend);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faTouchmove",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchmove){var i=t.renderNode._eventInput||t.renderNode;i.on("touchmove",function(n){var a=e(o.faTouchmove);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faTouchstart",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchstart){var i=t.renderNode._eventInput||t.renderNode;i.on("touchstart",function(n){var a=e(o.faTouchstart);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faVideoSurface",["$famous","$famousDecorator",function(e,n){return{scope:!0,transclude:!0,template:'<div class="fa-video-surface"></div>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/VideoSurface"];r.$watch(function(){return r.$eval(o.faOptions)},function(e,n){t.renderNode.setOptions(n)},!0),t.renderNode=new i({class:r.$eval(o.class)}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o.class.split(" ")),n.sequenceWith(r,function(e){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r,a){var o=n.ensureIsolate(e),t=function(){o.renderNode.setContent(a.faVideoUrl)};t(),a.$observe("faVideoUrl",t),n.registerChild(e,r,o)}}}}}]),angular.module("famous.angular").directive("faView",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){var t=e["famous/core/View"];return{pre:function(e,r,a){var o=n.ensureIsolate(e);o.children=[],o.renderNode=new t({size:e.$eval(a.faSize)||[void 0,void 0]}),n.addRole("renderable",o),o.show(),n.sequenceWith(e,function(e){o.renderNode.add(e.renderGate),o.children.push(e)})},post:function(e,r,a){var t=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,t)}}}}}]);