
const periods = {
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000
};

export default function formatTime(timeCreated) {
  var diff = Date.now() - timeCreated;

  if (diff > periods.month) {
    // it was at least a month ago
    return Math.floor(diff / periods.month) + " month(s) ago";
  } else if (diff > periods.week) {
    return Math.floor(diff / periods.week) + " week(s) ago";
  } else if (diff > periods.day) {
    return Math.floor(diff / periods.day) + " day(s) ago";
  } else if (diff > periods.hour) {
    return Math.floor(diff / periods.hour) + " hour(s) ago";
  } else if (diff > periods.minute) {
    return Math.floor(diff / periods.minute) + " minute(s) ago";
  } 
  return "Just now";
}



// function timeAgo(dateParam) {
//     if (!dateParam) {
//       return null;
//     }
  
//     const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
//     const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
//     const today = new Date();
//     const yesterday = new Date(today - DAY_IN_MS);
//     const seconds = Math.round((today - date) / 1000);
//     const minutes = Math.round(seconds / 60);
//     const isToday = today.toDateString() === date.toDateString();
//     const isYesterday = yesterday.toDateString() === date.toDateString();
//     const isThisYear = today.getFullYear() === date.getFullYear();
  
//     if (seconds < 5) {
//       return 'now';
//     } else if (seconds < 60) {
//       return `${ seconds } seconds ago`;
//     } else if (seconds < 90) {
//       return 'about a minute ago';
//     } else if (minutes < 60) {
//       return `${ minutes } minutes ago`;
//     } else if (isToday) {
//       return `today`; 
//     } else if (isYesterday) {
//       return `1 day ago`; 
//     } else if (isThisYear) {
//       return getFormattedDate(date, false, true);
//     }
  
//     return getFormattedDate(date);
// }
  
// function getFormattedDate(date) {
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     // const hours = date.getHours();
//     let minutes = date.getMinutes();
  
//     if (minutes < 10) {
//       // Adding leading zero to minutes
//       minutes = `0${ minutes }`;
//     }
  
//     if(month < 10){
//       month = `0${ month }`;
//     }
  
//     if(day < 10){
//       day = `0${ day }`;
//     }
  
//     return `${ month }/${ day }/${ year }`;
// }
// ============================
// used perviously the above one
// was not much help full
// still working on it
// ============================ 
  
// got this one from stack over flow.
// ==============================


// ============================
// used perviously the below one
// was not much help full
// still working on it
// ============================ 

// export default function timeAgoNew(dateParam) {
//   const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
//   const ms = date.getTime();
//   console.log(ms);
//   var ago = Math.floor(ms / 1000);
//   var part = 0;

//   if (ago < 2) { return "a moment ago"; }
//   if (ago < 5) { return "moments ago"; }
//   if (ago < 60) { return ago + " seconds ago"; }

//   if (ago < 120) { return "a minute ago"; }
//   if (ago < 3600) {
//     while (ago >= 60) { ago -= 60; part += 1; }
//     return part + " minutes ago";
//   }

//   if (ago < 7200) { return "an hour ago"; }
//   if (ago < 86400) {
//     while (ago >= 3600) { ago -= 3600; part += 1; }
//     return part + " hours ago";
//   }

//   if (ago < 172800) { return "a day ago"; }
//   if (ago < 604800) {
//     while (ago >= 172800) { ago -= 172800; part += 1; }
//     return part + " days ago";
//   }

//   if (ago < 1209600) { return "a week ago"; }
//   if (ago < 2592000) {
//     while (ago >= 604800) { ago -= 604800; part += 1; }
//     return part + " weeks ago";
//   }

//   if (ago < 5184000) { return "a month ago"; }
//   if (ago < 31536000) {
//     while (ago >= 2592000) { ago -= 2592000; part += 1; }
//     return part + " months ago";
//   }

//   if (ago < 1419120000) { // 45 years, approximately the epoch
//     return "more than year ago";
//   }

//   // TODO pass in Date.now() and ms to check for 0 as never
//   return "never";
// }