const now = () => {
    const d = new Date()
    return d.toISOString() // .toISOString returns the date and standard date and time format
  }
  
  // Sets up the message template for Info, Error and Warning messages
  const info  = msg => {
    console.log('[' + now() + ']  INFO: ' + msg)
  }
  
  const error = msg => {
    console.log('[' + now() + '] ERROR: ' + msg)
  }
  
  const warn = msg => {
    console.log('[' + now() + ']  WARN: ' + msg)
  }
  
  // -----------------------------------------------------------------------------
  // Public API
  
  // TODO: add levels for debug, fatal
  module.exports = {
    info: info,
    warn: warn,
    error: error
  }