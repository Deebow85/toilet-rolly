/**
 * Calculate runtime in minutes for a reel
 * @param diameter Current diameter in mm
 * @param endDiameter End diameter in mm
 * @param speed Speed in meters per minute
 * @param bulk Bulk in mm
 * @param isTwoPly Whether the tissue is 2-ply (runs out twice as fast)
 * @returns Runtime in minutes
 */
export function calculateRuntime(
  diameter: number,
  endDiameter: number,
  speed: number,
  bulk: number,
  isTwoPly: boolean = false
): number {
  if (!diameter || !endDiameter || !speed || !bulk) return 0;
  if (diameter <= endDiameter) return 0;
  
  // Calculate the number of wraps from outer to inner diameter
  const wraps = (diameter - endDiameter) / (2 * bulk);
  
  // Calculate average circumference (using mean diameter)
  const meanDiameter = (diameter + endDiameter) / 2;
  const avgCircumference = Math.PI * (meanDiameter / 1000); // Convert to meters
  
  // Total length = number of wraps * average circumference
  const totalLength = wraps * avgCircumference;
  
  // Runtime = total length / speed
  let runtime = totalLength / speed;
  
  // For 2-ply tissue, halve the runtime as it runs out twice as fast
  if (isTwoPly) {
    runtime = runtime / 2;
  }
  
  // Return rounded to nearest minute
  return Math.round(runtime);
}

/**
 * Calculate runtime to break in minutes
 * @param diameter Current diameter in mm
 * @param breakDiameter Break diameter in mm
 * @param speed Speed in meters per minute
 * @param bulk Bulk in mm
 * @param isTwoPly Whether the tissue is 2-ply (runs out twice as fast)
 * @returns Runtime to break in minutes
 */
export function calculateRuntimeToBreak(
  diameter: number,
  breakDiameter: number,
  speed: number,
  bulk: number,
  isTwoPly: boolean = false
): number {
  if (!diameter || !breakDiameter || !speed || !bulk) return 0;
  if (diameter <= breakDiameter) return 0;
  
  // Calculate the number of wraps from outer to break diameter
  const wraps = (diameter - breakDiameter) / (2 * bulk);
  
  // Calculate average circumference (using mean diameter)
  const meanDiameter = (diameter + breakDiameter) / 2;
  const avgCircumference = Math.PI * (meanDiameter / 1000); // Convert to meters
  
  // Total length = number of wraps * average circumference
  const totalLength = wraps * avgCircumference;
  
  // Runtime = total length / speed
  let runtime = totalLength / speed;
  
  // For 2-ply tissue, halve the runtime as it runs out twice as fast
  if (isTwoPly) {
    runtime = runtime / 2;
  }
  
  // Return rounded to nearest minute
  return Math.round(runtime);
}

/**
 * Calculate total length of tissue on a reel in meters
 * @param diameter Current diameter in mm
 * @param endDiameter End diameter in mm
 * @param bulk Bulk in mm
 * @returns Total length in meters
 */
export function calculateLength(
  diameter: number,
  endDiameter: number,
  bulk: number
): number {
  if (!diameter || !endDiameter || !bulk) return 0;
  if (diameter <= endDiameter) return 0;
  
  // Calculate the number of wraps from outer to inner diameter
  const wraps = (diameter - endDiameter) / (2 * bulk);
  
  // Calculate average circumference (using mean diameter)
  const meanDiameter = (diameter + endDiameter) / 2;
  const avgCircumference = Math.PI * (meanDiameter / 1000); // Convert to meters
  
  // Total length = number of wraps * average circumference
  const totalLength = wraps * avgCircumference;
  
  // Return rounded to nearest meter
  return Math.round(totalLength);
}

/**
 * Format a time in minutes to HH:mm:ss
 * @param minutes Time in minutes
 * @returns Formatted time string
 */
export function formatTime(minutes: number): string {
  if (!minutes) return '00:00:00';
  
  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);
  const secs = Math.round((minutes % 1) * 60);
  
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}