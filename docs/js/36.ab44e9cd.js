(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}));a("ac1f"),a("5319"),a("498a");function s(e){var t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function o(e){var t=window.location.origin+window.location.pathname+"#"+e,a=document.getElementById(e);a&&(a.id=""),window.location.hash="#"+e,a&&setTimeout((function(){a.id=e}),300),s(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function i(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},bd06:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-markdown",[e._v("\n::: warning\nCodepen uses the UMD version of QCalendar. As such, the examples below must be written in such a way that they also work on that platform. If you see code like `QCalendar.addToDate`, you can instead use `import { addToDate } from '@quasar/quasar-ui-qcalendar'` in your own non-UMD code to get the best tree-shaking effects.\n:::\n    ")]),a("example-title",{attrs:{title:"Week View"}}),a("example-viewer",{attrs:{title:"Basic",file:"WeekViewBasic","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Dark",file:"WeekViewDark","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"First Day Monday",file:"WeekViewMondayFirstDay","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"5 Day Work Week",file:"WeekViewFiveDayWorkWeek","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nYou can use the `now` property to set a fixed date, otherwise the current date will be used. If the `v-model` property is empty, then it will receive the `now` property's value.\n\nThe example below sets the previous day to `now` unless today is Sunday, in which case it sets `now` to the next day.\n    ")]),a("example-viewer",{attrs:{title:"Now",file:"WeekViewNow","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Short Weekday Label",file:"WeekViewShortWeekdayLabel","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\n`hour24-format` is available only for one of the available `day` or `week` views.\n    ")]),a("example-viewer",{attrs:{title:"Hour24 Format",file:"WeekViewHour24Format","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\n`short-interval-label` is available only for one of the available `day` or `week` views.\n    ")]),a("example-viewer",{attrs:{title:"Short Interval Label",file:"WeekViewShortIntervalLabel","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Short Interval Label (Hour24Format)",file:"WeekViewShortIntervalLabelHour24Format","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThere may be circumstances where you wish to control the scrolling. In this case, use the `no-scroll` property and provide your own scroll wrapper.\n\n:::\nNote: The header area of the calendar will now scroll with the rest of the calendar\n:::\n    ")]),a("example-viewer",{attrs:{title:"No Scroll",file:"WeekViewNoScroll","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Navigation"}}),a("example-viewer",{attrs:{title:"Prev/Next",file:"WeekViewPrevNext","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"WeekViewSwipe","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Disabled"}}),a("example-viewer",{attrs:{title:"Disabled Days",file:"WeekViewDisabledDays","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIn this example, the `disabled-before` is set to the monday of this week and the `disabled-after` is set to the friday of this week.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Before/After",file:"WeekViewDisabledBeforeAfter","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nIn this example, the `disabled-weekdays` is set to disable the weekends.\n    ")]),a("example-viewer",{attrs:{title:"Disabled Weekdays",file:"WeekViewDisabledWeekdays","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Header"}}),a("q-markdown",[e._v("\nColumn Headers are scoped slots only. They are turned on with the `column-header-before` and `column-header-after` properties. Once each property is set to `true` the respective slot is availale.\nColumn Headers are only available for the `day` (includes 2day, 3day, etc), `week` and `scheduler` views.\nThe `timestamp` information is passed to the scoped slot.\n    ")]),a("example-viewer",{attrs:{title:"Column Header",file:"WeekViewColumnHeader","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Events"}}),a("q-markdown",[e._v('\n::: tip\nThe events below won\'t show up unless there is a listener for it. Therefore, if using `Vue Devtools`, you won\'t see it unless you add it.\n:::\n\nYou can add a listener for the following events. An event is comprised of an `event + suffix`. By adding the event with the suffix, you get the completed listener name.\n\n| Event       | `:day:header2`     | `:time2`            | `:interval2`       | `:interval:header2` | `:date2`           |\n| ----------- | :----------------: | :----------------: | :----------------: | :-----------------: | :----------------: |\n| click       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: |\n| contextmenu | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: |\n| mousedown   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mousemove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mouseup     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mouseenter  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| mouseleave  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| touchstart  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| touchmove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n| touchend    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :x:                |\n\n::: warning\nDo NOT combine suffixes. Only one suffix per event. A different suffix will give you a different event.\n:::\n\n| Suffix | Description | Data |\n| ------ | ----------- | ---- |\n| `:day:header2` | The header area | `{ scope: { timestamp: { "..." }, index: 0 }, event: { "..." } } |\n| `:time2` | The slotted area to side of intervals | `{ scope: { timestamp: { "..." }, index: 0 }, event: { "..." } } |\n| `:interval2` | The interval area | `{ scope: { timestamp: { "..." } }, event: { "..." } } |\n| `:interval:header2` | The header area above the intervals | `{ scope: { days: [ "..." ] }, event: { "..." } } |\n| `:date2` | The date button | Date in format YYYY-MM-DD |\n\n::: tip\n`:intervals:header2` is new since v2.4.0\n:::\n\n::: warning\nThe events `:day` (now `:day:header2`), `:time`, `:interval` and `:date` have been removed in v3.0.0\n:::\n\nThe example below is only showing `click` events as well as the `input` event.\n    ')]),a("example-viewer",{attrs:{title:"Events",file:"WeekViewEvents","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Slots"}}),a("q-markdown",[e._v("\nFor slots that return `day`, `interval` or `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-MM-DD\n  time: '',       // HH:MM (optional)\n  year: 0,        // YYYY\n  month: 0,       // MM (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\n\nYou can use the slots `day-header` and `day-body` to control visual aspects of your event system.\nThe example below is using the `day-header` slot to indicate there are events on that day, in case it is not visible, indicating to the user they should scroll down to see the event.\nThe `day-body` slot is used to get information about the date and time of an event and then to calculate where the absolute position of the event based on passed in functions `timeStartPos` and `timeDurationHeight`.\n    ")]),a("example-viewer",{attrs:{title:"day-header with day-body",file:"WeekViewSlots","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"head-day",file:"WeekViewSlotHeadDay","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nYou can use the scopedSlot `day-container` to set an absolute position for a time tracking bar.\nScroll down if the current time is later for your location to see the example.\n    ")]),a("example-viewer",{attrs:{title:"day-container: Show current time",file:"WeekViewCurrentTime","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Customization"}}),a("q-markdown",[e._v("\nYou can create your own themes by overriding various css vars. You do not have to override all of them (as in the next example), just the ones you need. For building your own themes, head on over to the [Theme Builder](../../quasar-ui-qcalendar/theme-builder)\n    ")]),a("example-viewer",{attrs:{title:"Colors",file:"WeekViewColors","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Locale Support"}}),a("example-viewer",{attrs:{title:"Locale",file:"WeekViewLocale","codepen-title":"QCalendar","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1)},o=[],i=a("fe7d"),n=a("8669"),r=a("384e"),l={name:"WeekView",components:{ExampleTitle:i["a"]},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(r["c"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(r["c"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Week View"),this.addToToc("Basic",2),this.addToToc("Dark",2),this.addToToc("First Day Monday",2),this.addToToc("5 Day Work Week",2),this.addToToc("Now",2),this.addToToc("Short Weekday Label",2),this.addToToc("Hour24 Format",2),this.addToToc("Short Interval Label",2),this.addToToc("Short Interval Label (Hour24Format)",2),this.addToToc("No Scroll",2),this.addToToc("Navigation"),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Disabled"),this.addToToc("Disabled Days",2),this.addToToc("Disabled Before/After",2),this.addToToc("Disabled Weekdays",2),this.addToToc("Header"),this.addToToc("Column Header",2),this.addToToc("Events"),this.addToToc("Events",2),this.addToToc("Slots"),this.addToToc("day-header with day-body",2),this.addToToc("head-day",2),this.addToToc("day-container: Show current time",2),this.addToToc("Customization"),this.addToToc("Colors",2),this.addToToc("Locale Support"),this.addToToc("Locale",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e;a=1===t?"title-"+a:"example-"+a;var s=Object(n["b"])(a);this.tempToc.push({children:[],id:s,label:e,level:t})}}},c=l,h=a("2877"),d=Object(h["a"])(c,s,o,!1,null,null,null);t["default"]=d.exports},fe7d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},o=[],i=a("8669"),n={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(i["b"])("title-"+this.title)}},methods:{copyHeading:i["a"]}},r=n,l=a("2877"),c=Object(l["a"])(r,s,o,!1,null,null,null);t["a"]=c.exports}}]);