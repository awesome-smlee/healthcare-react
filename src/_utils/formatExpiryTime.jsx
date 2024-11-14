function formatExpiryTime(expiresIn) {
  if (expiresIn <= 0) return "만료된 토큰";

  const now = Date.now();
  const expiryTime = now + expiresIn * 1000;
  const timeDiff = expiryTime - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  let result = "";

  if (days > 0) result += `${days}일 `;
  if (hours > 0) result += `${hours}시간 `;
  if (minutes > 0) result += `${minutes}분`;
  else if (days === 0 && hours === 0 && minutes === 0) result += "곧 만료됨";

  return result || "지금";
}

export default formatExpiryTime;
