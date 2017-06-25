/**
 * @module logger
 * @desc Simple logger built around winston.
 */
const winston = require('winston');

module.exports.getLogger = function({ level, fileName }) {
  const transports = [new winston.transports.Console()];
  if (fileName)
    transports.push(new winston.transports.File({ fileName }));

  const opts = {
    level,
    transports
  };

  return new winston.Logger(opts);
};
