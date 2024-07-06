import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";

function format(dateStr: string) {
  return formatDistance(new Date(dateStr), new Date(), { addSuffix: true });
}

export function useTimeAgo(dateStr: string) {
  const [date, setDate] = useState(format(dateStr));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(format(dateStr));
    }, 1000);

    return () => clearInterval(interval);
  }, [dateStr]);

  return date;
}
