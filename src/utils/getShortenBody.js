const getShortenBody = (body) => {
  if (body && body.length > 80) {
    const newBody = body.substr(0, 80);
    return newBody.concat("...");
  } else {
    return body;
  }
};

export default getShortenBody;
