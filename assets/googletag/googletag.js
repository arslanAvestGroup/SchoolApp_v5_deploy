// Global site tag (gtag.js) - Google Ads: 1054649839
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-1054649839');


// Event snippet for ILJS_Register conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button
// google tag for inv page.
function gtag_report_conversion(url) {
  console.log(' inside gtag_report_conversion ');
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-1054649839/BWeHCK74sLkBEO_b8vYD',
      'event_callback': callback
  });
  return false;
}

// for reg page.
function gtag_report_conversion2(url) {
var callback = function () {
  if (typeof(url) != 'undefined') {
    window.location = url;
  }
};
gtag('event', 'conversion', {
    'send_to': 'AW-1054649839/4lBBCPOZiLoBEO_b8vYD',
    'event_callback': callback
});
return false;
}


// Listen for the event.
document.addEventListener('gtagTrigger', function (e) {
      console.log('Event gtagTrigger');
      gtag_report_conversion();
}, false);

// Listen for the event.
document.addEventListener('gtagTriggerReg', function (e) {
  console.log('Event gtagTriggerReg');
  gtag_report_conversion2();
}, false);
