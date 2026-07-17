export function getHoursUntilNextDate(targetMonth: number, targetDay: number) {
  const now = new Date();
  let targetDate = new Date(now.getFullYear(), targetMonth - 1, targetDay); // monthIndex = month - 1

  // if the date has already passed this year, set it for next year
  if (now > targetDate) {
    targetDate.setFullYear(now.getFullYear() + 1);
  }

  const diffMs = targetDate.getTime() - now.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60));
}

export function getYearsDifference(d1: Date, d2: Date) {
  let years = d2.getFullYear() - d1.getFullYear();

  const monthDiff = d2.getMonth() - d1.getMonth();
  const dayDiff = d2.getDate() - d1.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) years--;

  return years;
}
