const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Custom format for logs
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}:  ${level}: ${message}`;
});

// Creating the logger instance
const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Timestamp in the desired format
        customFormat  // Custom log format
    ),
    transports: [
        new transports.Console(),  // Log output to the console
        new transports.File({ filename: 'combines.log' })  // Log output to a file
    ],
});

// Exporting the logger for use in other files
module.exports = logger;
