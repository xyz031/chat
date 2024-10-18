export const isSameSenderMargin = (messages, m, i, userId) => {
  // Check if the next message is from the same sender and the current sender is not the user
  if (
    i < messages.length - 1 &&
    messages[i + 1]?.sender?._id === m.sender._id &&
    messages[i].sender._id !== userId
  ) {
    return 33; // Add margin
  }
  // Check if the next sender is different or current is the last message not from user
  else if (
    (i < messages.length - 1 &&
      messages[i + 1]?.sender?._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  ) {
    return 0; // No margin
  }
  return "auto"; // Default margin
};

export const isSameSender = (messages, m, i, userId) => {
  // Check if current message sender is different from the next message sender
  return (
    i < messages.length - 1 &&
    (messages[i + 1]?.sender?._id !== m.sender._id ||
      messages[i + 1]?.sender?._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  // Check if the current message is the last message and it's not from the user
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1]?.sender?._id !== userId &&
    messages[messages.length - 1]?.sender?._id
  );
};

export const isSameUser = (messages, m, i) => {
  // Check if the previous message is from the same sender
  return i > 0 && messages[i - 1]?.sender?._id === m.sender._id;
};

export const getSender = (loggedUser, users) => {
  // Return the name of the other user
  return users[0]?._id === loggedUser?._id ? users[1]?.name : users[0]?.name;
};

export const getSenderFull = (loggedUser, users) => {
  // Return the full user object of the other user
  return users[0]?._id === loggedUser?._id ? users[1] : users[0];
};
