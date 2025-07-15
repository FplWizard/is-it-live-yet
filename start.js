const axios = require('axios');

const interval = {
  value: null,
  lastCheck: null,
};

const timespan = 1000 * 10; // 10 seconds
interval.value = setInterval(check, timespan);
check();

async function check() {
  // Format HH:MM:SS
  const ts = new Date() * 1;

  const [fplStatus, fplBootstrap] = await Promise.all([
    axios.get('https://fantasy.premierleague.com/api/event-status/'),
    axios.get('https://fantasy.premierleague.com/api/bootstrap-static/'),
  ]);

  // Check FPL status
  try {
    if (fplStatus?.data?.status?.[0]?.event !== 38) {
      throw new Error('NEW SEASON!! //status');
    }

    const current = fplBootstrap?.data?.events?.find(e => e.is_current);
    if (!current?.id) throw new Error('NEW SEASON!!! //bootstrap');

    const tsNew = new Date() * 1;

    console.log(
      'Current event:',
      current.id,
      new Date(ts).toLocaleTimeString('en-GB', { hour12: false }),
      interval.lastCheck ? `// Last check: ${(ts - tsNew).toFixed(0)} ms ago...` : ''
    );

    interval.lastCheck = tsNew;
  } catch (error) {
    console.log(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    console.log('*************** ERROR ***************');
    console.log(error.message);
    console.log('*************************************');
    console.log('https://fantasy.premierleague.com/');

    var url2 = 'https://www.youtube.com/watch?v=p-Z3YrHJ1sU';
    var start2 = (process.platform === 'darwin') ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
    require('child_process').exec(start2 + ' ' + url2);

    var url = 'https://fantasy.premierleague.com/';
    var start = (process.platform === 'darwin') ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
    require('child_process').exec(start + ' ' + url);

    // Break interval
    clearInterval(interval.value);
  }
}