const DataBunch = require('../Classes/DataBunch');
const { channels } = require('../utils/globalData');
const recievedActorBunch = require('./recievedActorBunch');

/**
 * @param {DataBunch} bunch
 */
const recievedSequencedBunch = (bunch) => {
  recievedActorBunch(bunch);

  if (bunch.bClose) {
    delete channels[bunch.chIndex];

    // onChannelClosed(bunch.ChIndex, channels[bunch.chIndex]?.actor?.actorNetGUID);

    return true;
  }

  return false;
};

module.exports = recievedSequencedBunch;
