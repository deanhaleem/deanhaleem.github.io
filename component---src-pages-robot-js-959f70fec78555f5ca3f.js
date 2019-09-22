(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(156),s=a(163),c=a(161),m=a(247),h=a.n(m),u=a(168),d=a.n(u),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return r()(t,e),t.prototype.render=function(){var e,t,a;return o.a.createElement(s.a,null,o.a.createElement(c.a,{title:"Robot"}),o.a.createElement(i.n,null,o.a.createElement(i.y,{around:!0,style:{marginBottom:"2rem"}},o.a.createElement(i.l,{md:"5"},o.a.createElement("figure",((e={className:"figure"}).className="text-center",e),o.a.createElement("img",{src:d.a,className:"figure-img img-fluid z-depth-1",alt:""}))),o.a.createElement(i.l,{md:"4",className:"align-self-center"},o.a.createElement("p",null,o.a.createElement("strong",null,"Source Code: "),o.a.createElement("a",{href:"http://u.osu.edu/feh17f7/",target:"_blank"},"Here"),"(password: master_f7)"),o.a.createElement("p",null,o.a.createElement("strong",null,"Language(s):"),o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Interactive_C",target:"_blank"},"Interactive C")),o.a.createElement("p",null,o.a.createElement("strong",null,"Tools:")," ",o.a.createElement("a",{href:"https://www.qt.io/qt-features-libraries-apis-tools-and-ide/#ide",target:"_blank"},"QT Creator")))),o.a.createElement(i.y,null,o.a.createElement(i.l,null,o.a.createElement("strong",null,"Project Description"),o.a.createElement("p",null,"The annual competition involves building robots to complete a course with certain obstacles. The goal is to finish as quickly as possible. During my team's year (2017), the obstacles were turning a satellite, holding a button down for five seconds, flipping a switch, pulling an object out of a wall, and placing that object into one of two bins. To decide which bin, the robot would detect the color of a light and decide based on that."),o.a.createElement("p",null,"My team's design involved using Omni Wheels. While this made it very simple to navigate and code, it did limit us as there were few motors available that could hook up to the wheels. This took away from how fast our robot could go, but we still consistently finished the course within a minute."),o.a.createElement("p",null,"More information about the competition can be found"," ",o.a.createElement("a",{href:"https://eed.osu.edu/robot-competition",target:"_blank"},"here"),"."))),o.a.createElement(i.y,null,o.a.createElement(i.l,null,o.a.createElement("figure",((t={className:"figure"}).className="text-center",t),o.a.createElement("img",{src:h.a,className:"figure-img img-fluid z-depth-1",alt:""}),o.a.createElement("figcaption",{className:"figure-caption"},"Top view of the course for my team's semester.")))),o.a.createElement(i.y,null,o.a.createElement(i.l,null,o.a.createElement("strong",null,"Challenges"),o.a.createElement("p",null,'The biggest challenge for most teams was pulling the object out of the wall. The reason for this was that the task lied in the "dead zone". As a result, the robot couldn\'t use the positioning system it used everywhere else. For us especially, this proved a challenge due to the omni-wheels coupled with our poor storage of the robot.'),o.a.createElement("p",null,"We kept the robot in a cardboard box that one team member would just carry to and from his dorm. Looking back, probably not the smartest move. This causes us to start every day readjusting the wheels so that they would take the robot straight forward. The omni-wheels seemed to be causing much more trouble in that regard compared to other teams' wheels."))),o.a.createElement(i.y,null,o.a.createElement(i.l,null,o.a.createElement("strong",null,"Winning 1st Place in Outstanding Achievment in Innovation"),o.a.createElement("p",null,"As mentioned earlier, the biggest challenge for most teams was pulling the object from the wall. This is where we won this award."),o.a.createElement("p",null,"The object had a magnetic circle in the middle of it, so we approached the problem with our goal being to pull it out using that. We had a magnet, but we needed something to hold it in and attach that to our robot. One of the team members simply took a pen cap and put the magnet in that. We attached it to the robot, but still had a problem. We needed to be generous when trying to get the object, or else we'd miss it. So, we decided to just move side to side in front of it so that the magnet had the best chance possible of connecting. With the current setup, though, if we went too hard to the side, the magnet would break off of the object. We needed to come up with a way that would allow us to move enough to the side while keeping the magnet connected once it was on there."),o.a.createElement("p",null,'First, we build a field goal shaped mechanism. This would hold the pen cap. Between the ends of the two "goal posts", we drilled small holes and ran a string through them. We also drilled small holes in the pen cap and ran the string through that. So now, the pen cap was attached to the string between the "goal posts" with the ability to slide back and forth. That was the key: the pen cap could slide back and forth. And so once it was attached to the object, even if the robot kept moving to the side, the pen cap would just keep sliding, not breaking off the object. It was a maintainable system as well, as if it turned out we needed to move to the side more, we could just make the field goals further apart.'),o.a.createElement("figure",((a={className:"figure"}).className="text-center",a),o.a.createElement("img",{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg",className:"figure-img img-fluid z-depth-1",alt:"",style:{width:"400px"}}),o.a.createElement("figcaption",{className:"figure-caption"},"Slightly hard to see, but towards the top right of the robot, the wooden fork with the pen cap is what we came up with.")))),o.a.createElement(i.y,null,o.a.createElement(i.l,null,o.a.createElement("strong",null,"Code"),o.a.createElement("p",null,"I haven't mentioned anything from a code point of view, and I've saved it here for last for good reason. There really wasn't anything to it. With the omni-wheels, we never had to worry about anything other than how much power to give certain motors and for how long. As a result, most of the code looked like this."),o.a.createElement("ul",{className:"list-unstyled text-center"},o.a.createElement("li",null,o.a.createElement("code",null,"northeastMotor.power(90);")),o.a.createElement("li",null,o.a.createElement("code",null,"northwestMotor.power(90);")),o.a.createElement("li",null,o.a.createElement("code",null,"//go for x amount of seconds")),o.a.createElement("li",null,o.a.createElement("code",null,"//stop motors. Start other ones."))),o.a.createElement("p",null,"On top of that, we were very new to programming. As a result, there simply isn't much to talk about with it.")))))},t}(l.Component);t.default=p},157:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(158);var c=r.a.createContext({}),m=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){e.exports=a.p+"static/ResumeOnline-19f6a0f1ce3a6e2689afd3af1e4875f7.pdf"},161:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),o=a(4),i=a.n(o),s=a(164),c=a.n(s),m=a(157);function h(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title;return l.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}h.defaultProps={lang:"en",meta:[],keywords:[]},h.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=h;var u="1025518380"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Dean Haleem",description:"Personal Website",author:"deanhaleem"}}}}},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(7),s=a.n(i),c=a(157),m=a(156),h=a(160),u=a.n(h),d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},t.toggleCollapse=function(){t.setState({isOpen:!t.state.isOpen})},t}return s()(t,e),t.prototype.render=function(){return r.a.createElement(m.v,{color:"unique-color-dark",dark:!0,expand:"md",className:"sticky-top",style:{marginBottom:"2rem"}},r.a.createElement(c.a,{to:"/",className:"navbar-brand"},r.a.createElement("strong",{className:"white-text"},"Dean Haleem")),r.a.createElement(m.x,{name:"navbar-toggler",onClick:this.toggleCollapse}),r.a.createElement(m.m,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(m.w,{left:!0},r.a.createElement(m.u,null,r.a.createElement(m.o,null,r.a.createElement(m.r,{nav:!0,caret:!0},"Projects"),r.a.createElement(m.q,null,r.a.createElement(c.a,{className:"dropdown-item",to:"/projects/"},"Overview"),r.a.createElement(m.p,{divider:!0}),r.a.createElement(c.a,{className:"dropdown-item",to:"/mario_clone/"},"Mario Clone"),r.a.createElement(c.a,{className:"dropdown-item",to:"/find_the_t/"},"Find The T!"),r.a.createElement(c.a,{className:"dropdown-item",to:"/myopgg/"},"MyOPgg"),r.a.createElement(c.a,{className:"dropdown-item",to:"/unity/"},"Unity"),r.a.createElement(c.a,{className:"dropdown-item",to:"/website/"},"Website"),r.a.createElement(m.p,{divider:!0}),r.a.createElement(c.a,{className:"dropdown-item",to:"/robot/"},"FEH Robot")))),r.a.createElement(m.u,null,r.a.createElement(c.a,{className:"nav-link",to:"/about/"},"About")),r.a.createElement(m.u,null,r.a.createElement("a",{className:"nav-link",href:"http://deangg.com",target:"_blank"},"MyOPgg")),r.a.createElement(m.u,null,r.a.createElement("a",{className:"nav-link",href:"http://deangg.com/FindTheT",target:"_blank"},"Find The T!")),r.a.createElement(m.u,null,r.a.createElement("a",{className:"nav-link",href:u.a,target:"_blank"},"Résumé"))),r.a.createElement(m.w,{right:!0},r.a.createElement(m.u,null,r.a.createElement("a",{className:"nav-link",href:"https://github.com/deanhaleem",target:"_blank"},r.a.createElement(m.t,{fab:!0,icon:"github"}))),r.a.createElement(m.u,null,r.a.createElement("a",{className:"nav-link",href:"https://instagram.com/deanhaleem",target:"_blank"},r.a.createElement(m.t,{fab:!0,icon:"instagram"}))),r.a.createElement(m.u,null,r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/deanhaleem",target:"_blank"},r.a.createElement(m.t,{fab:!0,icon:"linkedin-in"}))))))},t}(n.Component),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return s()(t,e),t.prototype.render=function(){return r.a.createElement(m.s,{color:"unique-color-dark"},r.a.createElement(m.n,{fluid:!0},r.a.createElement(m.y,{style:{paddingTop:"1rem"},center:!0,className:"text-center"},r.a.createElement("p",null,"Thank you for taking the time to visit my website. Please, take a look around, and always feel free to contact me."))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(m.n,{fluid:!0},r.a.createElement(m.y,{className:"text-center"},r.a.createElement(m.l,{md:"2"},r.a.createElement("a",{href:"https://www.linkedin.com/in/deanhaleem",target:"_blank"},"LINKEDIN")),r.a.createElement(m.l,{md:"2"},r.a.createElement("a",{href:"https://instagram.com/deanhaleem",target:"_blank"},"INSTAGRAM")),r.a.createElement(m.l,{md:"4",style:{color:"white"}},"deanhaleem.10@gmail.com"),r.a.createElement(m.l,{md:"2"},r.a.createElement("a",{href:"https://github.com/deanhaleem",target:"_blank"},"GITHUB")),r.a.createElement(m.l,{md:"2"},r.a.createElement("a",{href:"https://twitter.com/deanhaleem",target:"_blank"},"TWITTER"))))))},t}(n.Component),g=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),t,r.a.createElement(p,null))};g.propTypes={children:o.a.node.isRequired};t.a=g},168:function(e,t,a){e.exports=a.p+"static/robot-2953ad55af2ef8e312e65e63413b555a.jpg"},247:function(e,t,a){e.exports=a.p+"static/robot-path-abf429958d05fec0d17dd34bc8c18944.png"}}]);
//# sourceMappingURL=component---src-pages-robot-js-959f70fec78555f5ca3f.js.map