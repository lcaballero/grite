package main // import "github.com/lcaballero/cms-db"

import "os"

func main() {
	app := NewApp(Actions{
		Build: Build,
	})
	err := app.Run(os.Args)
	if err != nil {
		panic(err)
	}
}
