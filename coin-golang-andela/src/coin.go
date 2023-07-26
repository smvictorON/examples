package coin

func divmod(a, b int) (int, int) {
	return a / b, a % b
}

func MakeChange(amount int) map[string]int {
	coins := map[string]int{"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1}
	change := map[string]int{}
	coinOrder := []string{"H", "Q", "D", "N", "P"}

	for _, coin := range coinOrder {
		val := coins[coin]
		quot, rem := divmod(amount, val)
		change[coin] = quot
		amount = rem

		if change[coin] == 0 {
			delete(change, coin)
		}
	}

	return change
}
