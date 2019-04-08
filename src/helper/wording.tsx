import { userTitle, UserTitle } from "../constants/messages";

/**
 * Get Random User Title
 */
export const getRandomUserTitle: (current?: UserTitle) => UserTitle = (
  current
): UserTitle => {
  while (true) {
    const title = userTitle[Math.floor(Math.random() * (userTitle.length - 1))];
    if (title !== current) {
      return title;
    }
  }
};
