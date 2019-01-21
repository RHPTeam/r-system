/**
 * response data
 * @param data
 * @param status
 * @param message
 * @param loading
 */
module.exports = (data, status, message, loading) =>{
  return {
    data: data,
    status: status,
    message: message,
    loading: loading,
  }
}