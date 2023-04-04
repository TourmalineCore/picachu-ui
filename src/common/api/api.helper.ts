export const getContentType = () => ({
  'Content-Type': `application/json`,
});

export const errorCatch = (error: any): string => (
  (error.response
    && error.response.data
    && error.response.data.message)
  || error.message
  || error.toString());
