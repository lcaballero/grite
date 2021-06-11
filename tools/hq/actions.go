package main

import (
	cli "github.com/urfave/cli/v2"
)

type AppAction func(Values) error

func (a AppAction) AsActionFunc() cli.ActionFunc {
	return func(c *cli.Context) error {
		return a(c)
	}
}

type Values interface {
	String(string) string
}

type Actions struct {
	Plain     AppAction
	Transform AppAction
}

func NewApp(a Actions) *cli.App {
	return &cli.App{
		Name: "try-cell",
		Commands: []*cli.Command{
			&cli.Command{
				Name:   "plain",
				Action: a.Plain.AsActionFunc(),
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:  "in",
						Usage: "input html file to remove attribute",
					},
					&cli.StringFlag{
						Name:  "out",
						Usage: "input html file to remove attribute",
					},
				},
			},
			&cli.Command{
				Name:   "transform",
				Action: a.Transform.AsActionFunc(),
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:  "in",
						Usage: "input html file to remove attribute",
					},
					&cli.StringFlag{
						Name:  "out",
						Usage: "input html file to remove attribute",
					},
				},
			},
		},
	}
}
