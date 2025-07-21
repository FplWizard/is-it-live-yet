const axios = require('axios');

const interval = {
  value: null,
  lastCheck: null,
};

const timespan = 1000 * 1; // 1 seconds
interval.value = setInterval(check, timespan);
check();

async function check() {
  // Format HH:MM:SS
  const ts = new Date() * 1;
  
  // Check FPL status
  try {
    const fplBootstrap = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
                            .then(res => ({success:true, data:res.data}))
                            .catch(err => ({ success: false, err: err.message, status: err.response?.status || 500 }));
    const current = fplBootstrap?.data?.events?.find(e => e.is_current);
    if(fplBootstrap?.success){
      if (fplBootstrap?.data?.events?.length && !current?.id) throw new Error('NEW SEASON!!! //bootstrap');
      throw new Error('NEW SEASON!!! //bootstrap else');
    }

    const tsNew = new Date() * 1;

    console.log(
      'Current event:',
      current?.id || 'N/A',
      current?.id == 38 ? `(old FPL is still running, it's not even close)` : `(It's getting ready for the new season)`,
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

    var url = 'https://fantasy.premierleague.com/';
    var start = (process.platform === 'darwin') ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
    require('child_process').exec(start + ' ' + url);

    // Break interval
    clearInterval(interval.value);
  }
}