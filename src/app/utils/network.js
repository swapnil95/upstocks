
/*
 * A generic method that can be used to handle network calles inside thunks
 * dataFormatter - callback to format the api response data
 * successHandler - callback to be executed on a positive response
 * erroHandler - callback to be executed on a negative response
 * response - API's response
 */
export function networkHandler(
  dataFormatter,
  successHandler,
  erroHandler,
  dispatch,
  response,
  raiseError=false
) {
  if (raiseError) {
    dispatch(erroHandler('Something went wrong'))
  }
  try {
    const formattedResponse = dataFormatter ? dataFormatter(response) : response
    dispatch(successHandler(formattedResponse))
  } catch(error) {
    console.error(error)
    dispatch(erroHandler('Something went wrong'))
  }
}
