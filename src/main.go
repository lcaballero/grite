package main // import "github.com/lcaballero/jaded"

import (
	"bytes"
	"fmt"
)

func main() {
	buf := &bytes.Buffer{}
	Jade_index(buf)
	fmt.Println(buf.String())
}
