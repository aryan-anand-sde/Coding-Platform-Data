import { fetchUserInfo } from "@qatadaazzeh/atcoder-api";
import { fetchUserContestList } from "@qatadaazzeh/atcoder-api";

// Get user profile
const user = await fetchUserInfo("aryan_anand");
console.log(`${user.userName} has a rating of ${user.userRating}`);

// Access contest history
console.log(`Participated in ${user.userContests.length} contests`);

// Get contest participation history for a user
const contestHistory = await fetchUserContestList("aryan_anand");

// Find contests where the user's performance was above 3000
const highPerformance = contestHistory.filter((c) => c.userPerformance > 3000);
console.log(`${highPerformance.length} contests with performance > 3000`);
