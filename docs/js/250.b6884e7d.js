(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[250],{"12ab":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div>\n    <q-toolbar>\n      <q-btn stretch flat label="Prev" @click="calendarPrev" />\n      <q-separator vertical />\n      <q-btn stretch flat label="Next" @click="calendarNext" />\n      <q-space />\n    </q-toolbar>\n    <q-separator />\n    <div style="overflow: hidden;">\n      <q-calendar\n        ref="calendar"\n        v-model="selectedDate"\n        view="month"\n        locale="en-us"\n        animated\n        transition-prev="slide-right"\n        transition-next="slide-left"\n        :selected-dates="selectedDates"\n        @click:day2="onToggleDay"\n        @click:date2="onToggleDate"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      selectedDates: []\n    }\n  },\n\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n\n    onToggleDate ({ scope }) {\n      if (scope !== undefined) {\n        this.toggleDate(scope.timestamp.date)\n      }\n    },\n\n    onToggleDay ({ scope }) {\n      if (scope !== undefined) {\n        this.toggleDate(scope.timestamp.date)\n      }\n    },\n\n    toggleDate (date) {\n      if (this.selectedDates.includes(date)) {\n        // remove the date\n        for (let i = 0; i < this.selectedDates.length; ++i) {\n          if (date === this.selectedDates[i]) {\n            this.selectedDates.splice(i, 1)\n            break\n          }\n        }\n      }\n      else {\n        // add the date\n        this.selectedDates.push(date)\n      }\n    }\n  },\n  watch: {\n    selectedDates (val) {\n      /* eslint-disable-next-line */\n      console.log(val)\n    }\n  }\n}\n<\/script>\n'}}]);