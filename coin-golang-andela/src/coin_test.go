package coin

import (
	"fmt"
	"testing"
)

func TestMakeChange(t *testing.T) {
	result := MakeChange(43)
	if result["Q"] != 1 || result["D"] != 1 || result["N"] != 1 || result["P"] != 3 {
		fmt.Println("--- FAIL 43:", result)
		t.Fail()
	}

	result = MakeChange(91)
	if result["H"] != 1 || result["Q"] != 1 || result["D"] != 1 || result["N"] != 1 || result["P"] != 1 {
		fmt.Println("--- FAIL 91:", result)
		t.Fail()
	}

	result = MakeChange(51)
	if result["H"] != 1 || result["P"] != 1 {
		fmt.Println("--- FAIL 51:", result)
		t.Fail()
	}

	result = MakeChange(0)
	if len(result) != 0 {
		fmt.Println("--- FAIL 0:", result)
		t.Fail()
	}
}
