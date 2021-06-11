package main // import "github.com/lcaballero/hq"

import (
	"os"
)

func main() {
	app := NewApp(Actions{
		Plain:     Plain,
		Transform: Transform,
	})
	err := app.Run(os.Args)
	if err != nil {
		panic(err)
	}
}
