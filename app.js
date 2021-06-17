const addHoursToDate = (date, minutesToAdd) => {
  return (futureDate = new Date(date.getTime() + minutesToAdd * 60000));
};

const SetTimmer = (startWorkingAt) => {
  let officeHoursInMinute = 525;

  let today = new Date();
  today =
    today.getMonth() + 1 + ' ' + today.getDate() + ' ' + today.getFullYear();

  let startedAt = new Date(`${today} ${startWorkingAt} GMT+0600`);
  let endAt = addHoursToDate(startedAt, officeHoursInMinute);

  let countDownDate = new Date('Jan 5, 2022 15:37:25').getTime();

  let clock = setInterval(function () {
    let now = new Date().getTime();
    let distance = endAt - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    document.getElementById(
      'show_time'
    ).innerHTML = `${hours}h:${minutes}m:${seconds}s`;

    if (distance < 0) {
      clearInterval(clock);
      console.log('Experied');
      document.getElementById('show_time').innerHTML = `00h:00m:00s`;
    }
  }, 1000);
};

function setWithExpiry(key, value) {
  const date = new Date();

  const item = {
    value: value,
    expiry: date.setHours(24, 0, 0, 0),
  };

  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

const setOffTimeToLocal = () => {
  document.getElementById('start_time').addEventListener('submit', (e) => {
    const form = document.getElementById('start_time');
    e.preventDefault();
    const officeStartedAt = document.getElementById('in_start_time').value;
    setWithExpiry('started_at', officeStartedAt);
    SetTimmer(officeStartedAt);
    form.style.display = 'none';
  });
};

const enableOrDisableForm = () => {
  const form = document.getElementById('start_time');
  if (getWithExpiry('started_at')) {
    form.style.display = 'none';
    SetTimmer(getWithExpiry('started_at'));
  } else {
    form.style.display = 'block';
  }
};

setOffTimeToLocal();
enableOrDisableForm();
