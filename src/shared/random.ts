export class RandomGenerator {
  public static randomFloat(
    params: { min: number; max: number } = { min: 0, max: 1 }
  ) {
    const { min, max } = params
    const delta = max - min
    let result = parseFloat((min + (Math.random() * delta)).toFixed(2))

    if (result > max) {
      result = parseFloat(max.toFixed(2))
    }

    return result
  }
}
