import { userTitle, UserTitle } from "../constants/messages";

/**
 * Get Random User Title
 *
 * @param {UserTitle} currentTitle - current Title
 */
export const getRandomUserTitle = (currentTitle?: UserTitle): UserTitle => {
  while (true) {
    const title = userTitle[Math.floor(Math.random() * userTitle.length)];
    if (title !== currentTitle) {
      return title;
    }
  }
};

/**
 * Format Date
 *
 * @param {Date} date - date
 */
export const formatDate = (date: Date): string => {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
